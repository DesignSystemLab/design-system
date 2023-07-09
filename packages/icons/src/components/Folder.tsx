export const Folder = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M22.5 19.5h-21V3h6l3 2.25h12V19.5Z"></path>
      <path d="M22.5 9h-21"></path>
    </svg>
  );
};
