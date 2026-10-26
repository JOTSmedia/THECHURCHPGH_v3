/* Interpretive API 2448 custom 40-channel frame. Dimensions are illustrative.
   Shared geometry and instanced controls; no rendering occurs while idle. */
import * as THREE from './vendor/three.module.min.js';

export async function createConsole(container, status, {onSectionChange, opening=false} = {}) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true, powerPreference:'low-power'});
  } catch (error) { throw new Error('The console needs WebGL. The reference photograph remains available.', {cause:error}); }
  const scene = new THREE.Scene();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x10100f,0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.28;
  const canvas = renderer.domElement;
  canvas.tabIndex = opening ? -1 : 0;
  canvas.setAttribute('role','img');
  canvas.setAttribute('aria-label','Interactive interpretation of The Church’s custom 40-channel API 2448 mixing console. Drag with a mouse to orbit, use arrow keys to rotate, or press Home for the complete console. Choose a channel to move its fader.');
  canvas.style.cssText='display:block;width:100%;height:100%;touch-action:pan-y pinch-zoom;cursor:grab;outline-offset:-5px;';
  if(opening){canvas.setAttribute('aria-hidden','true');canvas.style.pointerEvents='none';}
  const camera = new THREE.PerspectiveCamera(36,1,.05,150);
  const root = new THREE.Group(); scene.add(root);
  const deck = new THREE.Group(); deck.position.y=1.55; deck.rotation.x=.105; root.add(deck);
  const geometries = new Set(), materials = new Set(), textures = new Set();
  const geo = g => (geometries.add(g),g);
  const mat = m => (materials.add(m),m);
  const material = (color,roughness=.6,metalness=.1) => mat(new THREE.MeshStandardMaterial({color,roughness,metalness}));
  const black=material(0x10161d,.4,.38), plate=material(0x121921,.47,.5), blue=material(0x12283d,.42,.5), edge=material(0x8b9195,.25,.85);
  const rubber=material(0x111315,.86,0), cream=material(0xc7c6b6,.38,.25), darkKnob=material(0x39424a,.36,.45), white=material(0xe0ded2,.4,.15);
  const amber=material(0xdd9a34,.4,.15), red=material(0xb82325,.36,.2), yellow=material(0xd6a538,.4,.12), green=material(0x487e65,.42,.1);
  const screw=material(0x8e979b,.3,.85);
  function texture(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);textures.add(t);return t;}
  const woodTexture=texture(1024,256,(c,w,h)=>{c.fillStyle='#6e3e1d';c.fillRect(0,0,w,h);for(let i=0;i<150;i++){c.strokeStyle=`rgba(${i%3?215:42},${i%3?151:22},${i%3?81:10},${.05+(i%5)*.018})`;c.lineWidth=.5+(i%4);c.beginPath();for(let x=0;x<=w;x+=12){const y=i*h/150+Math.sin(x*.012+i*.35)*2.5+Math.sin(x*.003+i)*6;if(!x)c.moveTo(x,y);else c.lineTo(x,y);}c.stroke();}});
  const wood=mat(new THREE.MeshStandardMaterial({map:woodTexture,color:0xd4ac7d,roughness:.42,metalness:0}));
  const unitBox=geo(new THREE.BoxGeometry(1,1,1));
  const knobGeo=geo(new THREE.CylinderGeometry(1,1.06,1,12));
  const capGeo=geo(new THREE.CylinderGeometry(1,1,1,12));
  const screwGeo=geo(new THREE.CylinderGeometry(1,1,1,8));
  function box(parent,w,h,d,x,y,z,m){const o=new THREE.Mesh(unitBox,m);o.scale.set(w,h,d);o.position.set(x,y,z);parent.add(o);return o;}
  const batches=[];
  function batch(parent,g,m){const records=[];const b={add(x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){records.push({x,y,z,sx,sy,sz,rx,ry,rz});return records.length-1;},records,mesh:null};batches.push(()=>{b.mesh=new THREE.InstancedMesh(g,m,records.length);const temp=new THREE.Object3D();records.forEach((r,i)=>{temp.position.set(r.x,r.y,r.z);temp.scale.set(r.sx,r.sy,r.sz);temp.rotation.set(r.rx,r.ry,r.rz);temp.updateMatrix();b.mesh.setMatrixAt(i,temp.matrix);});b.mesh.instanceMatrix.needsUpdate=true;b.mesh.computeBoundingSphere();parent.add(b.mesh);});return b;}
  const skirts=batch(deck,knobGeo,rubber), knobs=batch(deck,capGeo,cream), caps=batch(deck,capGeo,darkKnob), ticks=batch(deck,unitBox,white);
  const redButtons=batch(deck,unitBox,red), yellowButtons=batch(deck,unitBox,yellow), greenButtons=batch(deck,unitBox,green), whiteButtons=batch(deck,unitBox,cream), slots=batch(deck,unitBox,rubber), faders=batch(deck,unitBox,white), faderLines=batch(deck,unitBox,black), screws=batch(deck,screwGeo,screw);
  const dialBlue=material(0x407c9e,.35,.45), dialRed=material(0xa2493b,.4,.3);
  const blueRings=batch(deck,capGeo,dialBlue), redRings=batch(deck,capGeo,dialRed);
  function knob(x,z,r=.067,kind='cream',seed=0,y=.09){skirts.add(x,y,z,r*1.15,.045,r*1.15);const b=kind==='dark'?caps:knobs;b.add(x,y+.053,z,r,.09,r);const a=-1.9+(seed%13)*.29;const dx=Math.sin(a)*r*.44,dz=Math.cos(a)*r*.44;ticks.add(x+dx,y+.1,z+dz,.012,.004,r*.65,0,a,0);}
  // Black steel chassis, inset desk and honey-brown hardwood cheeks and armrest.
  function wedge(width,depth,x,top,m){const g=geo(new THREE.BoxGeometry(width,1,depth));const p=g.attributes.position;for(let i=0;i<p.count;i++)p.setY(i,p.getY(i)>0?top-Math.sin(.105)*p.getZ(i):.64);p.needsUpdate=true;g.computeVertexNormals();const mesh=new THREE.Mesh(g,m);mesh.position.x=x;root.add(mesh);return mesh;}
  wedge(17.65,5.72,0,1.49,black);
  wedge(.28,5.96,-8.78,1.61,wood);wedge(.28,5.96,8.78,1.61,wood);
  box(root,17.85,.46,.48,0,1.02,2.94,wood);
  box(root,17.85,.09,.20,0,1.27,2.72,rubber);
  wedge(.035,5.96,-8.94,1.62,edge);wedge(.035,5.96,8.94,1.62,edge);
  box(root,.55,1.65,4.2,-7.6,-.03,.14,black);box(root,.55,1.65,4.2,7.6,-.03,.14,black);
  box(root,15.3,.25,.5,0,-.65,-1.3,black);
  const banks=[-5.25,5.25], bankWidth=6.5, channelStep=bankWidth/20;
  const pickables=[], channelPositions=[], faderPositions=[];
  function bankLabels(startChannel){return texture(2048,1536,(c,w,h)=>{
    c.fillStyle='#141b22';c.fillRect(0,0,w,h);const col=w/20;
    for(let i=0;i<20;i++){
      const x=(i+.5)*col;c.fillStyle=i%2?'#151d25':'#18212b';c.fillRect(i*col+1,0,col-2,h*.73);
      c.fillStyle='#12283b';c.fillRect(i*col+1,h*.73,col-2,h*.27);
      c.strokeStyle='#5d6770';c.lineWidth=1;c.beginPath();c.moveTo(i*col,0);c.lineTo(i*col,h);c.stroke();
      c.fillStyle='#cbd0cb';c.font='600 15px Arial';c.textAlign='center';c.fillText(String(i+startChannel),x,27);
      c.font='9px Arial';c.fillStyle='#a9b6bc';['MIC / LINE','GAIN','HF','HMF','LMF','LF','AUX 1 / 2','AUX 3 / 4','AUX 5 / 6','AUX 7 / 8','PAN'].forEach((t,j)=>c.fillText(t,x,60+j*89));
      c.fillStyle='#d2cbc0';c.font='bold 14px Arial';c.fillText(String(i+startChannel),x,h-28);
      c.font='10px Arial';c.textAlign='right';for(let t=0;t<12;t++){const yy=h*.762+t*h*.016;c.fillStyle='#afb8ba';c.fillRect(x+col*.1,yy,col*.13,1);if(t%2===0)c.fillText(['+10','5','0','−5','−10','−20'][t/2],x-col*.05,yy+3);}
      c.textAlign='center';c.fillStyle='#d8d0b8';c.fillRect(x-col*.35,h*.70,col*.7,22);c.fillStyle='#27313b';c.font='bold 11px Arial';c.fillText('CH '+(i+startChannel),x,h*.70+15);
      // Fine frequency ticks around the EQ knobs become legible in close view.
      for(let r=0;r<4;r++){const cy=220+r*89;c.strokeStyle='#adb6b8';for(let t=0;t<9;t++){const a=3.8+t*.52;c.beginPath();c.moveTo(x+Math.cos(a)*29,cy+Math.sin(a)*29);c.lineTo(x+Math.cos(a)*34,cy+Math.sin(a)*34);c.stroke();}}
    }
  });}
  const horizontalPlane=geo(new THREE.PlaneGeometry(1,1));
  function topGraphic(parent,map,w,d,x,y,z){const m=mat(new THREE.MeshStandardMaterial({map,roughness:.65,metalness:.12,transparent:true}));const p=new THREE.Mesh(horizontalPlane,m);p.rotation.x=-Math.PI/2;p.scale.set(w,d,1);p.position.set(x,y,z);parent.add(p);return p;}
  banks.forEach((bankX,bank)=>{
    box(deck,6.54,.12,5.30,bankX,0,0,plate);
    const face=topGraphic(deck,bankLabels(bank*20+1),6.5,5.24,bankX,.065,0);face.userData.bank=bank;pickables.push(face);
    for(let col=0;col<20;col++){
      const index=bank*20+col,x=bankX-bankWidth/2+channelStep*(col+.5);channelPositions.push(x);
      for(let row=0;row<11;row++){
        const z=-2.25+row*.292;const r=row<6?.066:.052;knob(x,z,r,row<2?'dark':'cream',col*3+row);
        if(row>=2&&row<=5)(row%2?redRings:blueRings).add(x,.113,z,r*1.065,.013,r*1.065);
      }
      // Adjacent illuminated routing and aux switches are true, shared 3D instances.
      for(let row=0;row<8;row++){
        const z=-1.93+row*.39;whiteButtons.add(x-.105,.093,z,.051,.045,.09);yellowButtons.add(x+.104,.094,z,.044,.048,.07);
      }
      redButtons.add(x-.07,.109,1.04,.085,.058,.09);greenButtons.add(x+.07,.109,1.04,.085,.058,.09);
      slots.add(x,.078,1.96,.034,.015,1.07);
      const level=opening?0:58+((col*7+bank*5)%22),z=2.49-level/100*1.08;
      faderPositions.push({x,z,value:level});faders.add(x,.145,z,.14,.115,.17);faderLines.add(x,.207,z,.115,.007,.016);
      for(const z of [-2.53,2.52])screws.add(x,.08,z,.016,.008,.016);
    }
    for(const x of [bankX-3.29,bankX+3.29])box(deck,.026,.03,5.34,x,.072,0,edge);
  });
  // Meter bridges: twenty channels per bank, in the characteristic two amber rows.
  const bridgeGroups=[];
  const meterTexture=texture(512,270,(c,w,h)=>{
    const bg=c.createLinearGradient(0,0,0,h);bg.addColorStop(0,'#c98c2b');bg.addColorStop(.45,'#f9d27a');bg.addColorStop(1,'#e9ac42');c.fillStyle=bg;c.fillRect(0,0,w,h);
    c.strokeStyle='#493c24';c.lineWidth=3;c.beginPath();c.arc(w*.50,h*.93,w*.39,Math.PI*1.10,Math.PI*1.90);c.stroke();
    c.font='bold 27px Arial';c.textAlign='center';for(let i=0;i<13;i++){const a=Math.PI*1.10+i*Math.PI*.8/12;const rr=w*.39;c.strokeStyle=i>9?'#ad3728':'#473d2a';c.lineWidth=i%2?2:3;c.beginPath();c.moveTo(w*.5+Math.cos(a)*rr,h*.93+Math.sin(a)*rr);c.lineTo(w*.5+Math.cos(a)*(rr-16),h*.93+Math.sin(a)*(rr-16));c.stroke();if(i%3===0){c.fillStyle=i>9?'#9f2a23':'#493c24';c.fillText(['−20','−10','−3','0','+3'][i/3],w*.5+Math.cos(a)*(rr+19),h*.93+Math.sin(a)*(rr+19)+9);}}
    c.fillStyle='#5c4524';c.font='bold 31px Georgia';c.fillText('VU',w*.5,h*.74);c.font='16px Arial';c.fillText('API',w*.83,h*.90);
  });
  const meterMat=mat(new THREE.MeshBasicMaterial({map:meterTexture,color:0xffe3aa,toneMapped:false}));
  const meterPlane=geo(new THREE.PlaneGeometry(.51,.27));
  banks.forEach((bankX,bank)=>{
    const bridge=new THREE.Group();bridge.position.set(bankX,2.40,-2.70);bridge.rotation.x=-.15;root.add(bridge);bridgeGroups.push(bridge);
    box(bridge,6.7,1.29,.28,0,0,0,black);box(bridge,6.72,.07,.33,0,.67,-.01,wood);box(bridge,6.65,.025,.025,0,-.59,.151,edge);
    for(let row=0;row<2;row++)for(let col=0;col<10;col++){
      const x=(col-4.5)*.62,y=.25-row*.47;
      box(bridge,.554,.319,.043,x,y,.157,rubber);
      const p=new THREE.Mesh(meterPlane,meterMat);p.position.set(x,y,.182);bridge.add(p);
      const needle=box(bridge,.006,.17,.004,x+.017*Math.sin(col*1.7),y-.027,.189,black);needle.rotation.z=.45-Math.sin(col*1.3+row)*.55;
      box(bridge,.03,.015,.012,x,y-.178,.17,amber);
    }
    const labels=texture(2048,128,(c,w,h)=>{c.fillStyle='#b4bdc0';c.textAlign='center';c.font='24px Arial';for(let col=0;col<10;col++)c.fillText(`${bank*20+col+1}     /     ${bank*20+col+11}`,(col+.5)*w/10,70);});
    const lp=new THREE.Mesh(horizontalPlane,mat(new THREE.MeshBasicMaterial({map:labels,transparent:true})));lp.scale.set(6.2,.26,1);lp.position.set(0,-.485,.16);bridge.add(lp);
  });
  // Center section is a work surface in the actual studio's custom split frame.
  box(deck,3.72,.13,5.28,0,-.015,0,black);
  box(deck,3.5,.025,2.55,0,.065,1.13,material(0x45494a,.68,.25));
  box(deck,2.6,.055,.97,0,.11,1.27,rubber);
  const keyboard=texture(1024,384,(c,w,h)=>{c.fillStyle='#22272c';c.fillRect(0,0,w,h);for(let row=0;row<5;row++)for(let col=0;col<18;col++){c.fillStyle=(row===1&&col>2&&col<8)?'#857f54':'#60686d';c.fillRect(24+col*54+(row%2)*8,20+row*65,44,48);c.fillStyle='#d9dace';c.font='15px Arial';c.fillText(row===0?String(col+1):'·',38+col*54+(row%2)*8,50+row*65);}});
  topGraphic(deck,keyboard,2.5,.91,0,.142,1.27);
  box(deck,.53,.085,.66,1.38,.115,1.31,rubber);knob(1.38,1.31,.14,'dark',1,.16);
  const masterTexture=texture(768,640,(c,w,h)=>{c.fillStyle='#182029';c.fillRect(0,0,w,h);c.fillStyle='#d2d0c2';c.textAlign='center';c.font='bold 45px Arial';c.fillText('API  2448',w/2,62);c.font='18px Arial';c.fillText('STEREO BUS  /  AUX MASTERS',w/2,103);for(let n=0;n<8;n++){const x=60+n*93;c.font='14px Arial';c.fillText(String(n+1),x,158);c.fillText('AUX',x,350);}c.font='20px Arial';c.fillText('MONITOR CONTROL',w/2,h-45);});
  topGraphic(deck,masterTexture,3.45,1.6,0,.075,-1.76);
  for(let col=0;col<8;col++){const x=-1.39+col*.397;knob(x,-2.16,.075,'dark',col);knob(x,-1.66,.07,'cream',col);yellowButtons.add(x,.105,-1.36,.07,.06,.11);}
  knob(-1.12,-1.03,.13,'dark',2);knob(1.12,-1.03,.13,'dark',5);
  for(let x=-.58;x<=.6;x+=.23){redButtons.add(x,.11,-1.05,.115,.06,.10);whiteButtons.add(x,.11,-.86,.115,.06,.1);}
  // Slim center monitor: DAW display is illustrative, not a simulated audio engine.
  box(deck,.42,.10,.65,0,.14,.0,black);box(deck,.17,.85,.15,0,.54,-.12,black);
  const display=new THREE.Group();display.position.set(0,2.40,-.09);display.rotation.x=-.16;root.add(display);
  box(display,2.98,1.65,.12,0,0,0,rubber);
  const screenTexture=texture(1200,660,(c,w,h)=>{
    c.fillStyle='#101921';c.fillRect(0,0,w,h);c.fillStyle='#303943';c.fillRect(0,0,w,42);c.fillStyle='#c2cbc9';c.font='16px Arial';c.fillText('THE CHURCH   /   STUDIO A',22,27);
    const colors=['#5f6379','#74739a','#7c648a','#537e88','#4e8b83','#4c8267','#7d8953','#527581'];
    for(let n=0;n<40;n++){const x=10+n*29.5;c.fillStyle=colors[Math.floor(n/5)];c.fillRect(x,62,27,558);c.fillStyle='#172831';c.fillRect(x+2,218,23,225);for(let k=0;k<6+(n%8);k++){c.fillStyle=k>10?'#c1ad49':'#7cba79';c.fillRect(x+16,429-k*13,5,10);}c.fillStyle='#b5c1b5';c.fillRect(x+6,480+(n%9)*8,14,7);c.fillStyle='#26343f';for(let j=0;j<6;j++)c.fillRect(x+3,81+j*19,21,13);}
    c.fillStyle='#26353a';c.fillRect(0,629,w,31);c.fillStyle='#bbc9ba';c.font='17px monospace';c.fillText('40 CHANNELS     •     ANALOG SIGNAL PATH',20,651);
  });
  const screen=new THREE.Mesh(horizontalPlane,mat(new THREE.MeshBasicMaterial({map:screenTexture,toneMapped:false})));screen.scale.set(2.82,1.49,1);screen.position.z=.066;display.add(screen);
  const badge=texture(1024,120,(c,w,h)=>{c.fillStyle='#c9c3b2';c.font='bold 64px Arial';c.textAlign='center';c.fillText('API  2448',w/2,86);});
  const bp=new THREE.Mesh(horizontalPlane,mat(new THREE.MeshBasicMaterial({map:badge,transparent:true})));bp.scale.set(1.08,.127,1);bp.position.set(0,-.76,.068);display.add(bp);
  batches.forEach(build=>build());
  // Selection is a warm, restrained outline; the fader cap itself stays ivory.
  const selectionGeometry=geo(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-.145,.075,-2.48),new THREE.Vector3(.145,.075,-2.48),new THREE.Vector3(.145,.075,2.47),new THREE.Vector3(-.145,.075,2.47)]));
  const selection=new THREE.LineLoop(selectionGeometry,mat(new THREE.LineBasicMaterial({color:0xd6b573,transparent:true,opacity:.8})));deck.add(selection);
  let selected=10;selection.position.x=channelPositions[selected];selection.visible=!opening;
  const shadowTexture=texture(256,128,(c,w,h)=>{const g=c.createRadialGradient(w/2,h/2,8,w/2,h/2,w/2);g.addColorStop(0,'rgba(0,0,0,.62)');g.addColorStop(.6,'rgba(0,0,0,.30)');g.addColorStop(1,'rgba(0,0,0,0)');c.fillStyle=g;c.fillRect(0,0,w,h);});
  const shadow=new THREE.Mesh(horizontalPlane,mat(new THREE.MeshBasicMaterial({map:shadowTexture,transparent:true,depthWrite:false})));shadow.rotation.x=-Math.PI/2;shadow.position.set(0,-.91,.3);shadow.scale.set(24,10,1);scene.add(shadow);
  scene.add(new THREE.HemisphereLight(0xe5e9ed,0x211b16,2.1));
  const key=new THREE.DirectionalLight(0xffe2b9,4.8);key.position.set(-6,14,9);scene.add(key);
  const fill=new THREE.DirectionalLight(0xc5dbed,2.3);fill.position.set(10,8,-5);scene.add(fill);
  const front=new THREE.DirectionalLight(0xffefd7,.9);front.position.set(2,3,11);scene.add(front);
  // A compact studio reflection map gives the metal real edge reflections.
  const environment=new THREE.Scene();environment.background=new THREE.Color(0x454440);
  const envWhite=new THREE.MeshBasicMaterial({color:0xf0eee8});const envGray=new THREE.MeshBasicMaterial({color:0x777b80});
  const envGeo=new THREE.PlaneGeometry(1,1);
  for(const [x,y,z,sx,sy,rx,ry,m] of [[0,8,0,18,10,Math.PI/2,0,envWhite],[-9,1,0,8,5,0,Math.PI/2,envGray],[9,2,0,8,6,0,-Math.PI/2,envWhite],[0,2,9,16,3,0,Math.PI,envGray]]){const p=new THREE.Mesh(envGeo,m);p.position.set(x,y,z);p.scale.set(sx,sy,1);p.rotation.set(rx,ry,0);environment.add(p);}
  const pmrem=new THREE.PMREMGenerator(renderer);let envTarget;
  try{envTarget=pmrem.fromScene(environment,.03);scene.environment=envTarget.texture;}catch{/* Direct lighting is also sufficient on constrained devices. */}
  pmrem.dispose();envGeo.dispose();envWhite.dispose();envGray.dispose();
  let disposed=false,inViewport=true,documentVisible=!document.hidden,contextAvailable=true,frame=0,tween=null,currentSection='overview';
  const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionLimited=()=>motionPreference.matches||document.documentElement.classList.contains('motion-paused');
  const state={angle:.24,elevation:.68,radius:21.9,target:new THREE.Vector3(0,1.2,0)};
  function active(){return !disposed&&inViewport&&documentVisible&&contextAvailable;}
  function render(){if(!active())return;const radius=opening||(currentSection==='overview'&&camera.aspect<.9)?state.radius:state.radius*Math.max(1,1.42/camera.aspect);camera.position.set(state.target.x+Math.sin(state.angle)*Math.cos(state.elevation)*radius,state.target.y+Math.sin(state.elevation)*radius,state.target.z+Math.cos(state.angle)*Math.cos(state.elevation)*radius);camera.lookAt(state.target);renderer.render(scene,camera);}
  function animate(time){frame=0;if(!active())return;if(tween){const p=motionLimited()?1:Math.min(1,(time-tween.start)/tween.duration),e=1-Math.pow(1-p,3);state.angle=THREE.MathUtils.lerp(tween.from.angle,tween.to.angle,e);state.elevation=THREE.MathUtils.lerp(tween.from.elevation,tween.to.elevation,e);state.radius=THREE.MathUtils.lerp(tween.from.radius,tween.to.radius,e);state.target.lerpVectors(tween.from.target,tween.to.target,e);if(p===1)tween=null;}render();if(tween)frame=requestAnimationFrame(animate);}
  function requestDraw(){if(active()&&!frame)frame=requestAnimationFrame(animate);}
  function move(to){if(motionLimited()){Object.assign(state,{angle:to.angle,elevation:to.elevation,radius:to.radius});state.target.copy(to.target);tween=null;}else tween={from:{...state,target:state.target.clone()},to,start:performance.now(),duration:440};requestDraw();}
  const say=text=>{if(status)status.textContent=text;};
  const descriptions={overview:'3D ready. Drag or use arrow keys to rotate.',channel:'Choose a channel below, then move its fader.',eq:'Equalizer view. Drag or rotate to inspect.',bus:'Bus and routing view.'};
  function view(name){
    if(disposed)return;
    if(name==='left'||name==='right'){tween=null;state.angle+=name==='left'?-.22:.22;requestDraw();return;}
    const x=channelPositions[selected];let to;
    if(name==='channel')to={angle:.13,elevation:.99,radius:5.4,target:new THREE.Vector3(x,1.64,.55)};
    else if(name==='eq')to={angle:.13,elevation:.94,radius:4.6,target:new THREE.Vector3(x,1.82,-1.52)};
    else if(name==='bus')to={angle:-.29,elevation:1.22,radius:7.6,target:new THREE.Vector3(0,1.9,-1.69)};
    else if(name==='top')to={angle:0,elevation:1.47,radius:19.2,target:new THREE.Vector3(0,1.1,0)};
    else{name='overview';to=overviewPose();}
    camera.fov=name==='overview'&&camera.aspect<.9?42:36;camera.updateProjectionMatrix();
    currentSection=name;say(descriptions[name]||'Overhead view of the custom split-frame console.');onSectionChange?.(name,{channel:selected+1,faderValue:faderPositions[selected].value});move(to);
  }
  const dummy=new THREE.Object3D();
  function writeFader(index,value){const p=faderPositions[index];p.value=value;p.z=2.49-value/100*1.08;for(const [b,y,sx,sy,sz] of [[faders,.145,.14,.115,.17],[faderLines,.207,.115,.007,.016]]){dummy.position.set(p.x,y,p.z);dummy.rotation.set(0,0,0);dummy.scale.set(sx,sy,sz);dummy.updateMatrix();b.mesh.setMatrixAt(index,dummy.matrix);}}
  function markFaders(){faders.mesh.instanceMatrix.needsUpdate=true;faderLines.mesh.instanceMatrix.needsUpdate=true;}
  function setFader(value){const v=Math.max(0,Math.min(100,Number(value)));if(!Number.isFinite(v)||disposed)return;writeFader(selected,v);markFaders();say(`Channel ${selected+1} selected. Fader at ${Math.round(v)} percent. This is a visual demonstration.`);requestDraw();}
  function setProgress(value){const v=Math.max(0,Math.min(100,Number(value)));if(!Number.isFinite(v)||disposed)return;for(let i=0;i<40;i++)writeFader(i,Math.max(0,Math.min(100,v*40-i*100)));markFaders();if(opening)render();else requestDraw();}
  function selectChannel(value){const channel=Number(value);if(disposed||!Number.isFinite(channel))return;selected=Math.max(0,Math.min(39,Math.round(channel)-1));selection.position.x=channelPositions[selected];say(`Channel ${selected+1} selected. Use the fader control below to move its fader.`);onSectionChange?.('channel',{channel:selected+1,faderValue:faderPositions[selected].value});if(currentSection==='channel'||currentSection==='eq')view(currentSection);requestDraw();}
  function fittedRadius(pose,fov){const direction=new THREE.Vector3(Math.sin(pose.angle)*Math.cos(pose.elevation),Math.sin(pose.elevation),Math.cos(pose.angle)*Math.cos(pose.elevation));const right=new THREE.Vector3(Math.cos(pose.angle),0,-Math.sin(pose.angle));const up=new THREE.Vector3().crossVectors(direction,right);const tangent=Math.tan(THREE.MathUtils.degToRad(fov/2));let distance=0;for(const x of [-8.95,8.95])for(const y of [-.9,3.2])for(const z of [-3.1,3.3]){const v=new THREE.Vector3(x,y,z).sub(pose.target);distance=Math.max(distance,v.dot(direction)+Math.abs(v.dot(right))/(tangent*camera.aspect),v.dot(direction)+Math.abs(v.dot(up))/tangent);}return distance*1.035;}
  function overviewPose(){if(camera.aspect>=.9)return {angle:.24,elevation:.68,radius:21.9,target:new THREE.Vector3(0,1.2,0)};const pose={angle:1.24,elevation:.98,target:new THREE.Vector3(0,1.1,.2)};pose.radius=fittedRadius(pose,42);return pose;}
  function openingPose(){if(!opening)return;tween=null;camera.fov=camera.aspect<.9?42:36;state.angle=camera.aspect<.9?1.24:camera.aspect<1.4?.62:.20;state.elevation=camera.aspect<.9?.98:.84;state.target.set(0,1.1,.2);state.radius=fittedRadius(state,camera.fov);}
  function overviewLayout(previousAspect){if(opening||currentSection!=='overview')return;if((camera.aspect<.9)!==(previousAspect<.9)){const pose=overviewPose();Object.assign(state,{angle:pose.angle,elevation:pose.elevation,radius:pose.radius});state.target.copy(pose.target);tween=null;}camera.fov=camera.aspect<.9?42:36;if(camera.aspect<.9){state.radius=fittedRadius(state,42);if(tween)tween.to.radius=fittedRadius(tween.to,42);}}
  function resize(){if(disposed)return;const width=container.clientWidth,height=container.clientHeight;if(!width||!height)return;const previousAspect=camera.aspect;renderer.setSize(width,height,false);camera.aspect=width/height;openingPose();overviewLayout(previousAspect);camera.updateProjectionMatrix();requestDraw();}
  let pointer=null;const raycaster=new THREE.Raycaster();const pointerVector=new THREE.Vector2();
  function pointerDown(e){if(e.pointerType!=='mouse'||e.button!==0)return;tween=null;pointer={id:e.pointerId,x:e.clientX,y:e.clientY,angle:state.angle,elevation:state.elevation,moved:false};canvas.setPointerCapture(e.pointerId);canvas.style.cursor='grabbing';}
  function pointerMove(e){if(!pointer||e.pointerId!==pointer.id)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;if(Math.abs(dx)+Math.abs(dy)>4)pointer.moved=true;state.angle=pointer.angle-dx*.006;state.elevation=Math.max(.28,Math.min(1.48,pointer.elevation+dy*.004));requestDraw();}
  function pick(e){const rect=canvas.getBoundingClientRect();pointerVector.set((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointerVector,camera);const hit=raycaster.intersectObjects(pickables,false)[0];if(!hit)return;const bank=hit.object.userData.bank;const local=deck.worldToLocal(hit.point.clone());const col=Math.max(0,Math.min(19,Math.floor((local.x-(banks[bank]-bankWidth/2))/channelStep)));selectChannel(bank*20+col+1);}
  function pointerUp(e){if(e.pointerType==='touch'){pick(e);return;}if(!pointer||e.pointerId!==pointer.id)return;const moved=pointer.moved;pointer=null;canvas.style.cursor='grab';if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(!moved)pick(e);}
  function pointerCancel(){pointer=null;canvas.style.cursor='grab';}
  function keydown(e){if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();if(e.key==='Home')view('reset');else if(e.key==='ArrowLeft'||e.key==='ArrowRight')view(e.key==='ArrowLeft'?'left':'right');else{tween=null;state.elevation=Math.max(.28,Math.min(1.48,state.elevation+(e.key==='ArrowUp'?.1:-.1)));requestDraw();}}
  function contextLost(e){e.preventDefault();contextAvailable=false;if(frame)cancelAnimationFrame(frame);frame=0;tween=null;pointerCancel();say('The 3D view was interrupted. The console photograph is still available. Reload to restore the interactive view.');canvas.hidden=true;canvas.style.display='none';const fallback=container.querySelector('.model-fallback, #opening-console-fallback');if(fallback)fallback.hidden=false;container.closest('.console-stage')?.classList.remove('model-ready');}
  function visibility(){documentVisible=!document.hidden;if(!documentVisible){if(frame)cancelAnimationFrame(frame);frame=0;}else requestDraw();}
  const inputEvents=[['pointerdown',pointerDown],['pointermove',pointerMove],['pointerup',pointerUp],['pointercancel',pointerCancel],['keydown',keydown]];
  function interaction(enabled){inputEvents.forEach(([name,fn])=>{canvas.removeEventListener(name,fn);if(enabled)canvas.addEventListener(name,fn);});canvas.tabIndex=enabled?0:-1;canvas.style.pointerEvents=enabled?'':'none';if(enabled)canvas.removeAttribute('aria-hidden');else canvas.setAttribute('aria-hidden','true');}
  interaction(!opening);canvas.addEventListener('webglcontextlost',contextLost);
  // The fallback is changed only after the renderer has successfully drawn once.
  const initialWidth=container.clientWidth||900,initialHeight=container.clientHeight||620;renderer.setSize(initialWidth,initialHeight,false);camera.aspect=initialWidth/initialHeight;openingPose();overviewLayout(1);camera.updateProjectionMatrix();
  try{render();}catch(error){renderer.dispose();envTarget?.dispose();throw error;}
  container.append(canvas);let fallback=container.querySelector('.model-fallback, #opening-console-fallback');if(fallback)fallback.hidden=true;
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(container);
  const intersectionObserver=new IntersectionObserver(entries=>{inViewport=entries[0].isIntersecting;if(!inViewport){if(frame)cancelAnimationFrame(frame);frame=0;}else{if(tween)tween.start=performance.now();resize();}},{rootMargin:'80px'});intersectionObserver.observe(container);
  function mount(nextContainer,{interactive=true,status:nextStatus}={}){if(disposed||!contextAvailable||!nextContainer)return false;pointerCancel();resizeObserver.unobserve(container);intersectionObserver.unobserve(container);if(fallback)fallback.hidden=false;container=nextContainer;if(nextStatus!==undefined)status=nextStatus;opening=!interactive;container.append(canvas);fallback=container.querySelector('.model-fallback, #opening-console-fallback');if(fallback)fallback.hidden=true;selection.visible=interactive;interaction(interactive);inViewport=true;if(interactive){camera.fov=36;view('overview');}else{currentSection='overview';openingPose();}resizeObserver.observe(container);intersectionObserver.observe(container);resize();return true;}
  function setSectionChangeHandler(handler){onSectionChange=typeof handler==='function'?handler:undefined;}
  document.addEventListener('visibilitychange',visibility);
  function dispose(){if(disposed)return;disposed=true;if(frame)cancelAnimationFrame(frame);resizeObserver.disconnect();intersectionObserver.disconnect();document.removeEventListener('visibilitychange',visibility);window.removeEventListener('pagehide',pagehide);for(const [event,fn] of [['pointerdown',pointerDown],['pointermove',pointerMove],['pointerup',pointerUp],['pointercancel',pointerCancel],['keydown',keydown],['webglcontextlost',contextLost]])canvas.removeEventListener(event,fn);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());envTarget?.dispose();renderer.dispose();canvas.remove();if(fallback)fallback.hidden=false;}
  function pagehide(e){if(!e.persisted)dispose();}window.addEventListener('pagehide',pagehide);
  say(descriptions.overview);resize();
  return {view,resize,setFader,selectChannel,setProgress,mount,setSectionChangeHandler,dispose};
}
