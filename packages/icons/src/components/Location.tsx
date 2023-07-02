export const Location = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M12 11.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
      <path d="M18 11.25c-2.25 5.25-6 11.25-6 11.25s-3.75-6-6-11.25S7.5 1.5 12 1.5s8.25 4.5 6 9.75Z"></path>
    </svg>
  );
};
