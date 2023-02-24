export const Video = (props: React.SVGProps<SVGSVGElement>) => {
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
      <path d="m16.5 9.75 6-3.75v12l-6-3.75v-4.5ZM1.5 6v12h15V6h-15Z"></path>
    </svg>
  );
};
