interface Props {
  className?: string;
}

export const SearchIcon = ({ className = "" }: Props) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <circle cx="11" cy="11" r="7" stroke-width="2" />
    <path d="M20 20L17 17" stroke-width="2" stroke-linecap="round" />
  </svg>
);
