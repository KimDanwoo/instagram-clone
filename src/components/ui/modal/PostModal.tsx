import React from 'react'

type Props = {
  children: React.ReactNode
  onClose: () => void
}
export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      className="fixed top-0 left-0 w-full h-full bg-neutral-900/70 z-20 flex flex-col justify-center items-center"
    >
      <button className="fixed top-0 right-0 p-8 text-white" onClick={onClose}>
        X
      </button>
      {children}
    </section>
  )
}
