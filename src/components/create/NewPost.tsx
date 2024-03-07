'use client'
import { AuthUser } from '@/model/user'
import React from 'react'
import Avatar from '../main/Avatar'
import FilesIcon from '../ui/icons/FilesIcon'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import useDragging from '@/hooks/useDragging'
import GridSpinner from '../ui/icons/GridSpinner'
import useCreatePost from '@/hooks/useCreate'

type Props = {
  user: AuthUser
}

export default function NewPost({ user }: Props) {
  const { dragging, file, handleChange, handleDrag, handleDragOver, handleDrop } = useDragging()
  const { loading, error, textRef, handleSubmit } = useCreatePost(file as File)

  return (
    <section className="w-full h-full m-w-[500px] mx-auto flex flex-col">
      {error && <p className="w-full bg-red-100 text-red-600 text-center p-4 mb-4 font-bold">{error}</p>}
      <div className="flex flex-row justify-center items-center">
        <Avatar image={user.image} size={13} highlight={true} />
        <p className="ml-2 font-bold">{user.username}</p>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input name="input" id="input-upload" type="file" accept="image/*" hidden onChange={handleChange} />
        <label
          htmlFor="input-upload"
          className={`relative w-full h-[300px] flex flex-col justify-center items-center mt-6 ${
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

          {dragging && <div className="absolute inset-0 z-10 bg-sky-500/20 pointer-events-none"></div>}
          {!file && (
            <div className="flex flex-col items-center pointer-events-none">
              <FilesIcon />
              <p>드래그로 이미지를 업로드해보세요</p>
            </div>
          )}
          {file && (
            <div className="relative w-full aspect-square h-[300px]">
              <Image
                src={URL.createObjectURL(file)}
                alt="local file"
                width={300}
                height={300}
                className="object-cover w-full h-full"
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
          className="border-neutral-300 p-2"
          ref={textRef}
        />
        <Button title="등록하기" red={false} disabled={false} />
      </form>
    </section>
  )
}
