'use client';

import React from 'react';

type Props = React.SVGProps<SVGSVGElement> & { size?: number };

export default function TikTokIcon({ size = 18, className = '', ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.91a6.34 6.34 0 0 0-1 .08 6.34 6.34 0 1 0 6.34 6.34V9.05a8.3 8.3 0 0 0 4.77 1.49V7.08a4.85 4.85 0 0 1-1-.39z" />
    </svg>
  );
}