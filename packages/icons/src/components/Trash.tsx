export const Trash = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="m9 4.5.75-3h4.5l.75 3H9Zm12 0H4.5l1.5 18h12l1.5-18H3h18ZM12 9v9-9Zm3.75 0L15 18l.75-9Zm-7.5 0L9 18l-.75-9Z"></path>
    </svg>
  );
};
