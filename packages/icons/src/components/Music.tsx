export const Music = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M5.25 22.5c1.657 0 3-1.679 3-3.75 0-2.071-1.343-3.75-3-3.75s-3 1.679-3 3.75c0 2.071 1.343 3.75 3 3.75Z"></path>
      <path d="M15 21c1.657 0 3-1.679 3-3.75 0-2.071-1.343-3.75-3-3.75s-3 1.679-3 3.75c0 2.071 1.343 3.75 3 3.75Z"></path>
      <path d="M8.25 9.75 18 7.5"></path>
      <path d="M8.25 18.75V4.5L18 2.25v15"></path>
    </svg>
  );
};
