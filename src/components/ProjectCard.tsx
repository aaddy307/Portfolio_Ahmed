import { motion } from 'framer-motion';
import type { Project } from '../data/portfolio';
import { useFinePointer } from '../hooks/useMedia';
import { EASE, Tilt } from './fx';
import { ProjectArt } from './Poster';

export default function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const fine = useFinePointer();
  return (
    <motion.article
      className="w-[88vw] max-w-[700px] shrink-0 snap-start sm:w-[72vw] md:w-[60vw] lg:w-[44vw] xl:w-[38vw]"
      initial={{ opacity: 0, y: 40, ...(fine && { filter: 'blur(10px)' }) }}
      whileInView={{ opacity: 1, y: 0, ...(fine && { filter: 'blur(0px)' }) }}
      viewport={{ once: true, margin: '0px -10% 0px 0px' }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: EASE }}
    >
      <Tilt max={5} className="group rounded-2xl">
        <div
          role="button"
          tabIndex={0}
          data-cursor="view"
          onClick={onOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onOpen();
            }
          }}
          aria-label={`Open ${project.title}`}
          className="focus-ring relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.95)] transition duration-500 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.98),0_0_35px_rgba(229,19,43,0.18)] group-hover:ring-white/25"
        >
          <motion.div layoutId={`art-${project.id}`} className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 transition-transform duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.07]">
              <ProjectArt project={project} />
            </div>
          </motion.div>

          <div className="absolute left-4 top-4 z-10 flex items-center gap-2 sm:left-6 sm:top-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            <span className="font-display text-xl leading-none text-crimson-2">S</span>
            <span className="text-[10px] font-bold tracking-[0.34em] text-bone">ORIGINAL</span>
          </div>
          <span className="absolute right-4 top-4 z-10 rounded border border-white/30 bg-black/75 px-2 py-0.5 text-[10px] font-bold text-bone backdrop-blur-md shadow-lg sm:right-6 sm:top-6">
            {project.year}
          </span>

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 [transform:translateZ(40px)]">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.24em] text-mist drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] sm:text-[11px]">
              {project.genre}
            </p>
            <motion.h3
              layoutId={`title-${project.id}`}
              className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.88] tracking-wide text-bone drop-shadow-[0_4px_20px_rgba(0,0,0,1)]"
            >
              {project.title}
            </motion.h3>
            <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
              <span className="flex min-h-9 items-center gap-2 rounded-md bg-bone px-4 text-xs font-bold text-ink transition group-hover:bg-white sm:min-h-10 sm:px-5 sm:text-sm">
                ▶ View Project
              </span>
              {(project.liveUrl || project.live) && (
                <a
                  href={project.liveUrl || project.live}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-9 items-center gap-2 rounded-md border border-white/25 bg-black/50 px-3.5 text-xs font-semibold text-bone backdrop-blur transition hover:border-crimson hover:text-crimson-2 sm:min-h-10 sm:px-4 sm:text-sm"
                >
                  Live ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  onClick={(e) => e.stopPropagation()}
                  className="flex min-h-9 items-center gap-2 rounded-md border border-white/25 bg-black/40 px-3.5 text-xs font-semibold text-bone backdrop-blur transition hover:border-bone sm:min-h-10 sm:px-4 sm:text-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  );
}
