export const ZoomOut = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M10.5 19.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
      <path d="m17.25 17.25 5.25 5.25"></path>
      <path d="M7.5 10.5h6"></path>
    </svg>
  );
};
