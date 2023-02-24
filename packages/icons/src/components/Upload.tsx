export const Upload = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="M12 10.5v11.25"></path>
      <path d="m8.25 13.5 3.75-3 3.75 3"></path>
      <path d="M6.75 16.5c-6.75.75-6-7.5 0-6.75C4.5 1.5 17.25 1.5 16.5 7.5c7.5-2.25 7.5 9.75.75 9H6.75Z"></path>
    </svg>
  );
};
