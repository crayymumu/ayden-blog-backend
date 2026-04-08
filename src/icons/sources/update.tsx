import type { SVGProps } from 'react'

export function UpdateIcon(props: SVGProps<SVGSVGElement>) {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.667 8A5.667 5.667 0 1 1 8 2.333c2.03 0 3.833 1.067 4.84 2.667M14 2.667V5h-2.333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 4.667V8l2 1.333"
      />
    </svg>
  )
}
