import React from 'react'

type Props = {
  href?: string
  label: string
}

const Link: React.FC<Props> = ({ href = "#", label }) => {
  return (
    <a href={href} className="text-sm text-white hover:text-gray-300 block">
      {label}
    </a>
  )
}

export default Link
