'use client'
import { AuthUser } from '@/model/user'
import React, { ChangeEvent, useState } from 'react'
import Avatar from '../main/Avatar'
import FilesIcon from '../ui/icons/FilesIcon'
import Button from '@/components/ui/button/Button'

type Props = {
  user: AuthUser
}

export default function NewPost({ user }: Props) {
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

  return (
    <section className="w-full h-full m-w-[600px] mx-auto flex flex-col">
      <div className="flex flex-row justify-center items-center">
        <Avatar image={user.image} size={13} highlight={true}></Avatar>
        <p className="ml-2 font-bold">{user.username}</p>
      </div>
      <form className="flex flex-col">
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
          className={`w-full h-40 flex flex-col justify-center items-center ${
            !file && 'border-2 border-sky-500 border-dashed'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <FilesIcon />
          <p>드래그로 이미지를 업로드해보세요</p>
        </label>
        <textarea
          name="text"
          id="input-test"
          placeholder="내용을 입력해보세요"
          cols={30}
          rows={10}
        />
        <Button title="등록하기" red={false} disabled={false} />
      </form>
    </section>
  )
}
