import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations or full hero banner art for each Original. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  if (project.image) {
    return (
      <div className={`relative h-full w-full overflow-hidden bg-ink ${className}`}>
        {/* Subtle accent glow behind the banner */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(120% 80% at 80% 20%, ${project.palette.via}44, transparent 65%)`,
          }}
        />
        {/* Full-width, high-clarity hero banner image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top opacity-95 transition-transform duration-700 ease-[var(--ease-cine)] group-hover:scale-105 group-hover:opacity-100"
        />
        {/* Ambient uniform dark tint to tone down pure white website backgrounds */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/25 transition-opacity duration-500 group-hover:bg-black/15" />

        {/* Top black shadow scrim for badges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[38%]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.6) 42%, rgba(0, 0, 0, 0.18) 78%, transparent 100%)',
          }}
        />

        {/* Cinematic bottom-to-top black shadow scrim for title, category, and action buttons */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[85%]"
          style={{
            background: 'linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0.98) 24%, rgba(0, 0, 0, 0.88) 44%, rgba(0, 0, 0, 0.58) 64%, rgba(0, 0, 0, 0.22) 82%, transparent 100%)',
          }}
        />

        {/* Left vignette for title contrast */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/2"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.25) 55%, transparent 100%)',
          }}
        />
      </div>
    );
  }
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={a} stopOpacity="0.55" />
              <stop offset="100%" stopColor={a} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
          {project.motif === 'shield' && (
            <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
              <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
              <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
              ))}
              <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          )}
          {project.motif === 'flow' && (
            <g fill="none" stroke={a}>
              <rect x="200" y="56" width="150" height="94" rx="12" strokeWidth="2" strokeOpacity="0.85" />
              <rect x="214" y="72" width="28" height="20" rx="4" strokeOpacity="0.7" />
              <line x1="214" x2="330" y1="124" y2="124" strokeWidth="3" strokeOpacity="0.4" strokeDasharray="18 8" />
              <g transform="translate(176 196)" fontFamily="Inter" fontSize="10" fill={a} stroke="none" letterSpacing="2">
                <circle cx="16" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" />
                <path d="M34 16 h46" stroke={a} strokeWidth="2" />
                <circle cx="96" cy="16" r="16" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.8" />
                <path d="M112 8 l38 -22 M112 24 l38 22" stroke={a} strokeWidth="2" strokeOpacity="0.6" />
                <circle cx="166" cy="-18" r="10" fill={a} fillOpacity="0.8" />
                <circle cx="166" cy="50" r="10" fill="none" stroke={a} strokeWidth="2" strokeOpacity="0.5" />
              </g>
            </g>
          )}
          {project.motif === 'tenants' && (
            <g fill="none" stroke={a}>
              {[0, 1, 2].map((r) =>
                [0, 1, 2, 3].map((c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={196 + c * 44}
                    y={50 + r * 44}
                    width="34"
                    height="34"
                    rx="7"
                    strokeWidth="1.6"
                    strokeOpacity={0.25 + ((r + c) % 3) * 0.25}
                    fill={(r + c) % 4 === 0 ? a : 'none'}
                    fillOpacity="0.25"
                  />
                )),
              )}
              <path d="M188 200 h190" strokeWidth="2" strokeOpacity="0.7" />
              <path d="M188 214 h190" strokeWidth="1" strokeOpacity="0.35" />
              <path d="M188 228 h190" strokeWidth="1" strokeOpacity="0.2" />
            </g>
          )}
        </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M4 27L12 5l8 22M7 19h10" fill="none" stroke="#e5132b" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
