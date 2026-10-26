# V2 styling audit — reviewed

The V2 redesign uses **Console to cathedral**, taste seed **212058381**, and package **4.0.0**. Current source extraction is documented in root DESIGN.md. Independent rendered review is complete at five viewport widths; the 320px email wrap was fixed and recaptured. No material visual issue remains within that scope. Do not carry forward the previous pass, score, contrast findings, or responsive certification.

Current review targets are the continuous dark workspace, full-stage photographic rooms, monumental type, same-canvas console opening/handoff, rectangular playback, standalone Dana profile, native sideways gallery, shared utility surfaces, 320px operation, and native focus/field states. The latest user removed the visible Instagram warning and replaced the window-focused gallery photo with Analog tape. Review these actual changes before scoring.

## Historical revision 3.3 styling evidence — not a V2 pass

The following applies only to the previous implementation.

---

# Consistency and styling audit

Implementation integrity: **pass**. The interface uses a product-specific photographic/editorial system; controls and utility pages share it. The original duplicated foundation and obsolete room-model/loader styles were removed rather than copied into new surfaces.

| Dimension | Review | Evidence |
| --- | --- | --- |
| Accessibility | 3/4 | Semantic landmarks, focus, native dialog and fields, complete keyboard console controls, reduced-motion handling; independent assistive-technology certification remains outside the evidence. |
| Performance | 3/4 | Local optimized assets/fonts, lazy iframe/3D, instanced controls, capped DPR and no idle 3D loop; no hardware-wide performance certification claimed. |
| Theming | 4/4 | Consistent timber/stone/brass roles, legible forms and notes, common header/footer/error/legal surfaces. |
| Responsive design | 3/4 | Five tested sizes and separate narrow fixes; physical touch testing not claimed. |
| Implementation integrity | 4/4 | Real content, honest email handoff/readiness, repository-path proof, recoverable third-party media and interpreted-model disclosure. |
| **Total** | **17/20** | No unresolved material defect in the tested scope. |

Resolved P1/P2 findings: missing keyboard channel selection, clipped playback focus, low-contrast credits, inconsistent utility shell, stale Neve inventory, face-cropping tablet ratios, a narrow gallery overflow, a single-letter email orphan, and refresh restoration after the opening. User-directed exceptions are uppercase copy, the bounded progress intro and automatic idle movement without dedicated controls. The global motion preference and system reduced-motion preference continue to suppress motion.

Static CSS parsing initially misread custom-property/inherited colors as black-on-black or white-on-white. The rendered scan and screenshots did not reproduce those contrast failures. The deliberately deferred lightbox image received a valid lazy source, and inventory names use balanced wrapping. See QA-REPORT.md for executable checks and VISUAL-CRITIQUE.md for the visual judgment.
