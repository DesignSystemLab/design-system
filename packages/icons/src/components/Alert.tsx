import React from 'react';
export const Alert = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-linecap="butt"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 17.25v1.5-1.5Zm0-15 10.5 19.5h-21L12 2.25Zm0 6v6-6Z"></path>
    </svg>
  );
};
