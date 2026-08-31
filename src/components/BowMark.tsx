interface BowMarkProps {
  className?: string
}

function BowMark({ className }: BowMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 78"
      role="presentation"
      aria-hidden="true"
    >
      <path d="M59.5 29.5C45 8 19 7 13 20c-6 13 12 23 46.5 9.5Z" />
      <path d="M60.5 29.5C75 8 101 7 107 20c6 13-12 23-46.5 9.5Z" />
      <path d="M60 30c-11 13-18 27-17 43" />
      <path d="M60 30c11 13 18 27 17 43" />
      <path d="M43 73c-2-8-8-13-15-17" />
      <path d="M77 73c2-8 8-13 15-17" />
      <circle cx="60" cy="30" r="4.5" />
    </svg>
  )
}

export default BowMark
