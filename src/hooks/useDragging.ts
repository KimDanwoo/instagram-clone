import { ChangeEvent, DragEvent, useState } from 'react'

export default function useDragging() {
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState<File>()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const files = e.target?.files
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  const handleDrag = (e: DragEvent) => {
    if (e.type === 'dragenter') {
      setDragging(true)
    }
    if (e.type === 'dragleave') {
      setDragging(false)
    }
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const files = e.dataTransfer?.files
    if (files && files[0]) {
      setFile(files[0])
    }
  }

  return {
    dragging,
    file,
    handleChange,
    handleDrag,
    handleDragOver,
    handleDrop,
  }
}
