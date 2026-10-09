import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import type { Certification } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

export default function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certification | null;
  onClose: () => void;
}) {
  useScrollLock(Boolean(cert));
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cert, onClose]);

  if (!cert) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={cert.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Dialog Content */}
      <motion.div
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-ink-2 shadow-2xl"
        initial={{ scale: 0.92, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 15 }}
        transition={{ duration: 0.3, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0 pr-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">
              {cert.issuer}
            </span>
            <h3 className="truncate font-sans text-base font-semibold text-bone sm:text-lg">
              {cert.name}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="hidden sm:flex h-9 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 text-xs font-semibold text-bone transition hover:bg-white/10"
            >
              Open Original ↗
            </a>
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close modal"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-lg text-mist transition hover:bg-white/10 hover:text-bone"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="flex flex-1 items-center justify-center overflow-auto bg-black/60 p-3 sm:p-6">
          <img
            src={cert.image}
            alt={cert.name}
            className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
          />
        </div>

        {/* Footer / Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-4 py-2.5 text-xs text-mist sm:px-6">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {cert.credentialId && <span>Credential ID: <strong className="text-bone">{cert.credentialId}</strong></span>}
            {cert.date && <span>Issued: <strong className="text-bone">{cert.date}</strong></span>}
          </div>
          <a
            href={cert.image}
            download={`${cert.name.replace(/[^a-zA-Z0-9]/g, '_')}_Certificate`}
            data-cursor="link"
            className="text-xs font-semibold text-crimson-2 hover:underline"
          >
            ⤓ Download Image
          </a>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
