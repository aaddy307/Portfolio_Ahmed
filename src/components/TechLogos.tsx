import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { className?: string; size?: number };

export function ReactLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11.5 -10.23174 23 20.46348"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <mask height="180" id="mask0_next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" fill="#000" r="90" />
      </mask>
      <g mask="url(#mask0_next)">
        <circle cx="90" cy="90" fill="#000" r="90" stroke="#fff" strokeWidth="6" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_next)"
        />
        <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_next" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_next" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FigmaLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
    </svg>
  );
}

export function NodeLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M16 2.5L3.8 9.5V23.5L16 30.5L28.2 23.5V9.5L16 2.5Z"
        fill="#339933"
      />
      <path
        d="M16 4.7L26.2 10.6V22.4L16 28.3L5.8 22.4V10.6L16 4.7Z"
        fill="#66CC33"
      />
      <path
        d="M16 8.5C11.8 8.5 8.5 11.8 8.5 16C8.5 20.2 11.8 23.5 16 23.5C20.2 23.5 23.5 20.2 23.5 16H20.5C20.5 18.5 18.5 20.5 16 20.5C13.5 20.5 11.5 18.5 11.5 16C11.5 13.5 13.5 11.5 16 11.5V8.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="64" height="64" rx="14" fill="#18181B" stroke="#3F3F46" strokeWidth="2" />
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="-1px"
      >
        ex
      </text>
    </svg>
  );
}

export function ReactNativeLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="17" y="7" width="30" height="50" rx="6" stroke="#61DAFB" strokeWidth="2.5" fill="#0B1320" />
      <line x1="28" y1="50" x2="36" y2="50" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" />
      <g transform="translate(32, 28) scale(0.95)">
        <circle cx="0" cy="0" r="2.2" fill="#61DAFB" />
        <ellipse rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60)" />
        <ellipse rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function MongoLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M16 2C16 2 8 8.5 8 17.2C8 23.4 12 28.2 16 30C20 28.2 24 23.4 24 17.2C24 8.5 16 2 16 2Z"
        fill="#00ED64"
      />
      <path
        d="M16 2C16 2 16 14 16 30C20 28.2 24 23.4 24 17.2C24 8.5 16 2 16 2Z"
        fill="#00684A"
      />
      <path
        d="M16 6V26"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MySQLLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="32" cy="32" r="30" fill="#005A78" />
      <path
        d="M14 40C18 24 34 16 46 22C41 26 40 33 46 36C38 36 32 44 26 44C20 44 16 42 14 40Z"
        fill="#FFFFFF"
      />
      <path
        d="M44 22C47 20 50 21 52 24C49 25 47 25 44 22Z"
        fill="#F29111"
      />
      <circle cx="43" cy="25" r="1.5" fill="#005A78" />
    </svg>
  );
}

export function AiDataLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 2L14.4 7.6L20 10L14.4 12.4L12 18L9.6 12.4L4 10L9.6 7.6L12 2Z"
        fill="url(#ai-grad-universe)"
      />
      <path
        d="M19 15L20.2 17.8L23 19L20.2 20.2L19 23L17.8 20.2L15 19L17.8 17.8L19 15Z"
        fill="url(#ai-grad-universe)"
      />
      <defs>
        <linearGradient id="ai-grad-universe" x1="4" y1="2" x2="23" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B98BFF" />
          <stop offset="0.5" stopColor="#FF3D5A" />
          <stop offset="1" stopColor="#4CC9FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function DataProductsLogo({ size = 28, className = '', ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="3" y="14" width="4" height="7" rx="1.5" fill="#46E3A8" />
      <rect x="10" y="8" width="4" height="13" rx="1.5" fill="#4CC9FF" />
      <rect x="17" y="3" width="4" height="18" rx="1.5" fill="#FFB547" />
      <path d="M5 11L12 5L19 2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="2" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function TechLogo({ name, size = 28, className = '' }: { name: string; size?: number; className?: string }) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes('react native')) {
    return <ReactNativeLogo size={size} className={className} />;
  }
  if (normalized.includes('react')) {
    return <ReactLogo size={size} className={className} />;
  }
  if (normalized.includes('next')) {
    return <NextLogo size={size} className={className} />;
  }
  if (normalized.includes('figma')) {
    return <FigmaLogo size={size} className={className} />;
  }
  if (normalized.includes('node')) {
    return <NodeLogo size={size} className={className} />;
  }
  if (normalized.includes('express')) {
    return <ExpressLogo size={size} className={className} />;
  }
  if (normalized.includes('mongo')) {
    return <MongoLogo size={size} className={className} />;
  }
  if (normalized.includes('mysql')) {
    return <MySQLLogo size={size} className={className} />;
  }
  if (normalized.includes('ai') || normalized.includes('data science')) {
    return <AiDataLogo size={size} className={className} />;
  }
  if (normalized.includes('data') || normalized.includes('product')) {
    return <DataProductsLogo size={size} className={className} />;
  }

  // Fallback
  return (
    <span className={`font-mono font-bold text-xs ${className}`}>
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
