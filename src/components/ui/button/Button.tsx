import React from 'react'

type Props = {
  title: string
  onClick: () => void
  red: boolean
  disabled: boolean
}

export default function Button({ title, onClick, red, disabled }: Props) {
  return (
    <button
      className={`${
        !red ? 'bg-sky-500 hover:bg-sky-600' : 'bg-red-500 hover:bg-red-600'
      } text-sm font-bold py-2 px-5 rounded-lg text-white ${
        disabled && 'opacity-50'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
