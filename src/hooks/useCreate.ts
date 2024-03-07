import { FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function useCreatePost(file: File) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const textRef = useRef<HTMLTextAreaElement>(null)
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!file) return
    setLoading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('text', textRef.current?.value || '')

    fetch('/api/posts', { method: 'POST', body: formData }) //
      .then((res) => {
        if (!res.ok) {
          setError('업로드에 실패했습니다.')
          return
        }
        router.push('/')
      })
      .catch((err) => setError(err.toString()))
      .finally(() => setLoading(false))
  }

  return {
    loading,
    error,
    textRef,
    handleSubmit,
  }
}
