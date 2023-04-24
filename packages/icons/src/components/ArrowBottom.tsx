import React from 'react';

export const ArrowBottom = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="butt"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m4.5 16.5 7.5 6 7.5-6"></path>
      <path d="M12 22.5v-21"></path>
    </svg>
  );
};
