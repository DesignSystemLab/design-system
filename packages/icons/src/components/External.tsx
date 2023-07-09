export const External = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M10.5 6.75H2.25v15h15V13.5"></path>
      <path d="M21 3 10.5 13.5"></path>
      <path d="M13.5 3H21v7.5"></path>
    </svg>
  );
};
