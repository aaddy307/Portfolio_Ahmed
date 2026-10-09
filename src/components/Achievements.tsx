import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { achievements, certifications, type Certification } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer.split(' · ')[0])));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View document ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* certifications rail */}
      <div className="mt-16">
        <div className="gutter mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
              Certified Credentials <span className="text-mist">· {certifications.length} certificates</span>
            </h3>
            <p className="mt-1 text-xs text-smoke">Click any certificate to inspect in high resolution</p>
          </div>
          <p className="text-xs text-smoke">{issuers.join(' · ')}</p>
        </div>

        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-4 overflow-x-auto py-5">
            {certifications.map((c, i) => (
              <motion.button
                key={c.name}
                type="button"
                onClick={() => setSelectedCert(c)}
                data-cursor="view"
                className="group relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-ink-2 p-3 text-left ring-1 ring-white/10 transition duration-300 hover:-translate-y-1.5 hover:ring-crimson-2/50 sm:w-[300px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.04, ease: EASE }}
              >
                {/* Certificate image thumbnail */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-black/60 ring-1 ring-white/10">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 transition duration-300 group-hover:opacity-30" />
                  <span className="absolute bottom-2 right-2 rounded-md bg-black/75 px-2 py-1 text-[10px] font-semibold text-bone/90 backdrop-blur opacity-0 transition duration-300 group-hover:opacity-100">
                    🔍 Expand
                  </span>
                </div>

                <div className="mt-3.5 flex flex-col justify-between flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-[10px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                      {c.issuer}
                    </span>
                    {c.date && <span className="text-[10px] text-smoke shrink-0">{c.date}</span>}
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-bone transition group-hover:text-white">
                    {c.name}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>

      {/* Lightbox / Modal for viewing certificate in high resolution */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-ink-2 shadow-2xl"
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">
                    {selectedCert.issuer}
                  </span>
                  <h4 className="font-sans text-base font-semibold text-bone sm:text-lg">
                    {selectedCert.name}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 text-xs font-semibold text-bone transition hover:bg-white/10"
                  >
                    Open Original ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-lg text-mist transition hover:bg-white/10 hover:text-bone"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal certificate viewer */}
              <div className="flex flex-1 items-center justify-center overflow-auto bg-black/60 p-4 sm:p-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="max-h-[72vh] w-auto max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
                />
              </div>

              {/* Modal footer with metadata if available */}
              {(selectedCert.credentialId || selectedCert.date) && (
                <div className="flex flex-wrap items-center justify-between border-t border-white/10 px-5 py-2.5 text-xs text-mist">
                  {selectedCert.credentialId && <span>Credential ID: {selectedCert.credentialId}</span>}
                  {selectedCert.date && <span>Completed: {selectedCert.date}</span>}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
