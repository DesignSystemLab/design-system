export const Portfolio = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M21.75 12.75V21H2.25v-8.25"></path>
      <path d="M12 16.5v-3"></path>
      <path d="M22.5 12V6h-21v6"></path>
      <path d="M15 6s0-3-3-3-3 3-3 3"></path>
      <path d="M22.5 12S18 15 12 15 1.5 12 1.5 12"></path>
    </svg>
  );
};
