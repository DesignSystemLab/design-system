export const Heart = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M3 12C.75 9 1.5 4.5 5.25 3s6 1.5 6.75 3c.75-1.5 3.75-4.5 7.5-3s3.75 6 1.5 9-9 9-9 9-6.75-6-9-9Z"></path>
    </svg>
  );
};
