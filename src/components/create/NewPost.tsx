'use client'
import { AuthUser } from '@/model/user'
import React, {
  ChangeEvent,
  DragEvent,
  FormEvent,
  useRef,
  useState,
} from 'react'
import Avatar from '../main/Avatar'
import FilesIcon from '../ui/icons/FilesIcon'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import useDragging from '@/hooks/useDragging'
import { useRouter } from 'next/navigation'
import GridSpinner from '../ui/icons/GridSpinner'

type Props = {
  user: AuthUser
}

export default function NewPost({ user }: Props) {
  const {
    dragging,
    file,
    handleChange,
    handleDrag,
    handleDragOver,
    handleDrop,
  } = useDragging()

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

  return (
    <section className="w-full h-full m-w-[600px] mx-auto flex flex-col">
      {error && (
        <p className="w-full bg-red-100 text-red-600 text-center p-4 mb-4 font-bold">
          {error}
        </p>
      )}
      <div className="flex flex-row justify-center items-center">
        <Avatar image={user.image} size={13} highlight={true}></Avatar>
        <p className="ml-2 font-bold">{user.username}</p>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          name="input"
          id="input-upload"
          type="file"
          accept="image/*"
          hidden
          onChange={handleChange}
        />
        <label
          htmlFor="input-upload"
          className={`relative w-full h-[260px] flex flex-col justify-center items-center mt-6 ${
            !file && 'border-2 border-sky-500 border-dashed'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {loading && (
            <div className="absolute text-center pt-[2%] z-10">
              <GridSpinner />
            </div>
          )}
          {dragging && (
            <div className="absolute inset-0 z-10 bg-sky-500/20 pointer-events-none"></div>
          )}
          {!file && (
            <div className="flex flex-col items-center pointer-events-none">
              <FilesIcon />
              <p>드래그로 이미지를 업로드해보세요</p>
            </div>
          )}
          {file && (
            <div className="relative w-full aspect-square">
              <Image
                src={URL.createObjectURL(file)}
                alt="local file"
                width={460}
                height={100}
                className="object-cover"
              />
            </div>
          )}
        </label>
        <textarea
          name="text"
          id="input-test"
          placeholder="내용을 입력해보세요"
          cols={30}
          rows={10}
          className="border-neutral-300"
          ref={textRef}
        />
        <Button title="등록하기" red={false} disabled={false} />
      </form>
    </section>
  )
}
