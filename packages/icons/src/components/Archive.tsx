import React from 'react';

export const Archive = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M9 11.25h6-6ZM3 7.5V21h18V7.5H3ZM1.5 3v4.5h21V3h-21Z"></path>
    </svg>
  );
};
