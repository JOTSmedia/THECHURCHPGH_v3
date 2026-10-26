/* A real console opening. Progress describes prepared hero/font/model resources,
   rather than estimating total site download bytes. The same canvas is handed
   to the equipment chapter and reused on replay. */
export function initOpening() {
  const $ = selector => document.querySelector(selector);
  const dialog = $('#opening');
  const host = $('#opening-console');
  if (!dialog?.showModal || !host || dialog.dataset.consoleOpening === 'ready') return;
  dialog.dataset.consoleOpening = 'ready';
  const percent = $('#opening-percent');
  const fill = $('#opening-fill');
  const progress = $('#opening-progress');
  const status = $('#opening-status');
  const fallback = $('#opening-console-fallback');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const paused = () => reduced.matches || document.documentElement.classList.contains('motion-paused');
  const MINIMUM = 2400, EXIT = 580, DEADLINE = 5200;
  let generation = 0, current = null, retainedModel = null;
  document.addEventListener('console-created', event => { if (!current) retainedModel = event.detail; });
  const atTop = () => scrollTo({top:0,left:0,behavior:'instant'});
  const valid = record => current === record && record.generation === generation && dialog.open && !record.leaving;
  function paint(value, record = current) {
    if (!record) return;
    const integer = Math.floor(Math.max(0,Math.min(100,value)));
    record.shown = Math.max(0,Math.min(100,value));
    if (integer === record.painted) return;
    record.painted = integer;
    if (percent) percent.textContent = `${integer}%`;
    if (fill) fill.style.transform = `scaleX(${integer / 100})`;
    progress?.setAttribute('aria-valuenow',String(integer));
    record.model?.setProgress(integer);
  }
  function leave(reason = 'skip') {
    const record = current;
    if (!record || !valid(record)) return;
    record.leaving = true;
    clearTimeout(record.deadline);cancelAnimationFrame(record.frame);
    if (reason === 'ready') paint(100,record);
    if (status) status.textContent = reason === 'ready' ? 'Studio ready.' : reason === 'timeout' ? 'Continuing with available studio assets.' : 'Entering the studio.';
    atTop();dialog.classList.add('is-leaving');
    record.exit = setTimeout(() => { if (current === record && dialog.open) dialog.close(); },paused()?0:EXIT);
  }
  async function prepareModel(record) {
    if (retainedModel) {
      const candidate = retainedModel;
      candidate.setSectionChangeHandler(null);
      if (candidate.mount(host,{interactive:false,status:null}) !== false) {
        record.model = candidate;
        candidate.setProgress(0);
        record.visualReady = performance.now();
        return;
      }
      candidate.dispose();retainedModel = null;
    }
    try {
      const {createConsole} = await import('./console-3d.js');
      if (!valid(record)) return;
      const model = await createConsole(host,null,{opening:true});
      if (!valid(record)) { model.dispose();return; }
      record.model = model;retainedModel = model;
      // First successful frame is already at zero; begin the visible rise after it.
      model.setProgress(0);record.visualReady = performance.now();
    } catch {
      if (!valid(record)) return;
      if (fallback) { fallback.hidden = false;try { await fallback.decode(); } catch {} }
      if (!valid(record)) return;
      record.visualReady = performance.now();record.fallback = true;
      if (status) status.textContent = 'Preparing the studio. Console photograph shown.';
    }
  }
  function open(replay = false) {
    if (dialog.open) return;
    generation++;
    const record = {generation,shown:0,painted:-1,complete:0,target:0,model:null,frame:0,leaving:false,visualReady:null,last:performance.now(),returnFocus:replay?$('#hero-title'):null};
    current = record;
    if (record.returnFocus) record.returnFocus.tabIndex = -1;
    atTop();dialog.classList.remove('is-leaving');
    document.documentElement.classList.add('opening-active');
    if (fallback) fallback.hidden = false;
    if (status) status.textContent = 'Preparing the studio.';
    paint(0,record);dialog.showModal();
    const resources = [
      () => { const hero=$('.hero-photo img');return hero?.decode ? hero.decode() : Promise.resolve(); },
      () => document.fonts?.load('400 24px "Libre Caslon Display"'),
      () => document.fonts?.load('400 16px Chivo'),
      () => document.fonts?.load('900 19px Chivo'),
      () => prepareModel(record)
    ];
    function settled() {
      if (!valid(record)) return;
      record.complete++;record.target=record.complete/resources.length*100;
    }
    resources.forEach(resource => Promise.resolve().then(resource).then(settled,settled));
    function tick(now) {
      record.frame=0;if(!valid(record))return;
      const delta=Math.max(0,Math.min(80,now-record.last));record.last=now;
      const timeLimit=paused()?100:record.visualReady!==null?Math.min(100,(now-record.visualReady)/MINIMUM*100):0;
      const goal=Math.min(record.target,timeLimit);
      // The visible integer drives forty sequential caps; each fader represents 2.5 percent.
      paint(paused()?goal:Math.min(goal,record.shown+delta*.055),record);
      if(record.complete===resources.length&&record.shown>=100){leave('ready');return;}
      record.frame=requestAnimationFrame(tick);
    }
    record.frame=requestAnimationFrame(tick);
    // Includes exit fade: normal runs always release the dialog within six seconds.
    record.deadline=setTimeout(()=>leave(record.complete===resources.length?'ready':'timeout'),paused()?1400:DEADLINE);
  }
  dialog.addEventListener('cancel',event=>{event.preventDefault();leave('skip');});
  $('#skip-opening')?.addEventListener('click',()=>leave('skip'));
  dialog.addEventListener('close',()=>{
    const record=current;if(!record)return;
    clearTimeout(record.deadline);clearTimeout(record.exit);cancelAnimationFrame(record.frame);
    generation++;current=null;
    document.documentElement.classList.remove('opening-active');
    atTop();requestAnimationFrame(atTop);
    const model=record.model;
    if(model){
      const destination=$('#console-model');
      if(destination&&model.mount(destination,{interactive:true,status:$('#console-status')})!==false){
        retainedModel=model;
        document.dispatchEvent(new CustomEvent('console-ready',{detail:model,bubbles:true}));
      }else{model.dispose();if(retainedModel===model)retainedModel=null;}
    }
    if(record.returnFocus?.isConnected)record.returnFocus.focus({preventScroll:true});
  });
  const replay=$('#replay-opening')||$('.opening-replay');
  if(replay){replay.hidden=false;replay.addEventListener('click',()=>open(true));}
  const query=new URLSearchParams(location.search);
  const refresh=performance.getEntriesByType('navigation')[0]?.type==='reload';
  if(refresh)atTop();
  if(refresh||query.get('opening')==='play'||(!location.hash&&!query.has('room')&&query.get('opening')!=='skip'))open();
  return {open,skip:()=>leave('skip')};
}
initOpening();
