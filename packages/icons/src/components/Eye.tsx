export const Eye = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M12.75 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path>
      <path d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"></path>
      <path d="M1.5 12S5.25 4.5 12 4.5 22.5 12 22.5 12s-3.75 7.5-10.5 7.5S1.5 12 1.5 12Z"></path>
    </svg>
  );
};
