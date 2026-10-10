import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, viewerProfiles, type ProfileId } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { EASE } from './fx';

export function ProfileAvatar({ id, size = 'lg' }: { id: ProfileId; size?: 'sm' | 'lg' }) {
  const p = viewerProfiles.find((v) => v.id === id)!;
  const box = size === 'lg' ? 'h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-xl' : 'h-8 w-8 rounded-md';
  if (id === 'ahmed') {
    return (
      <span className={`relative flex items-center justify-center overflow-hidden shadow-lg ${box}`} style={{ background: 'radial-gradient(circle at 50% 30%, #7a0f24, #1a0509)' }}>
        <img
          src="/assets/portrait-420.webp"
          alt="Ahmed Khan"
          className="h-full w-full object-cover object-[center_15%]"
        />
      </span>
    );
  }
  const glyph = { recruiter: 'R', developer: '</>', creative: '✦' }[id];
  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden font-display text-bone shadow-lg ${box}`}
      style={{ background: `linear-gradient(145deg, ${p.color}, #0b0b10 120%)` }}
    >
      <span className={size === 'lg' ? 'text-4xl sm:text-5xl select-none' : 'text-sm select-none'}>{glyph}</span>
    </span>
  );
}

export default function ProfileSelector({ onPick }: { onPick: (id: ProfileId) => void }) {
  const fine = useFinePointer();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onPick('ahmed');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-12 sm:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, ...(fine && { filter: 'blur(10px)' }) }}
      transition={{ duration: 0.7, ease: EASE }}
      role="dialog"
      aria-label="Who's watching?"
    >
      <div aria-hidden className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(229,19,43,0.14),transparent_70%)]" />
      
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center">
        <motion.h2
          className="mb-8 sm:mb-12 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20, ...(fine && { filter: 'blur(8px)' }) }}
          animate={{ opacity: 1, y: 0, ...(fine && { filter: 'blur(0px)' }) }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          Who&apos;s watching?
        </motion.h2>

        <motion.ul
          className="grid grid-cols-2 gap-6 sm:flex sm:flex-row sm:items-start sm:justify-center sm:gap-6 md:gap-8 lg:gap-10"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
        >
          {viewerProfiles.map((p) => (
            <motion.li
              key={p.id}
              className="flex w-32 flex-col items-center sm:w-36 md:w-40"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            >
              <button
                type="button"
                onClick={() => onPick(p.id)}
                data-cursor="play"
                className="group flex w-full flex-col items-center text-center focus:outline-none"
              >
                <div className="relative mb-3 flex items-center justify-center">
                  <span className="relative block rounded-xl ring-2 ring-transparent transition-all duration-300 group-hover:scale-105 group-hover:ring-white/90 group-focus-visible:ring-white/90">
                    <ProfileAvatar id={p.id} />
                    {p.id === 'ahmed' && (
                      <span className="absolute -right-2 -top-2 z-10 rounded-full bg-crimson px-2 py-0.5 text-[9px] font-bold tracking-[0.16em] text-white shadow-md">
                        MAIN
                      </span>
                    )}
                  </span>
                </div>
                <span className="mb-1 block font-sans text-sm font-medium text-mist transition group-hover:text-bone sm:text-base">
                  {p.name}
                </span>
                <span className="block min-h-[2.5rem] w-full text-[11px] sm:text-xs leading-snug text-smoke text-center">
                  {p.blurb}
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="mt-10 sm:mt-14 max-w-md text-center text-xs sm:text-sm leading-relaxed text-smoke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Every profile watches the same true story of {profile.displayName} — it only changes what plays first.
        </motion.p>
      </div>
    </motion.div>
  );
}
