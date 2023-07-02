export const Lightning = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="m13.5 9.75 6-8.25L6 9.75l4.5 4.5-6 8.25L18 14.25l-4.5-4.5Z"></path>
    </svg>
  );
};
