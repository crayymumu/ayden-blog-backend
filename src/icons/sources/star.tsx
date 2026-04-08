import type { SVGProps } from 'react'

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M8 1.333l2.06 4.174 4.607.67-3.334 3.25.787 4.586L8 11.84l-4.12 2.173.787-4.586-3.334-3.25 4.607-.67L8 1.333Z"
      />
    </svg>
  )
}
