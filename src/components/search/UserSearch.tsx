'use client'
import { SearchUser } from '@/model/user'
import { FormEvent, useState } from 'react'
import useSWR from 'swr'
import GridSpinner from '../ui/icons/GridSpinner'
import UserCard from './UserCard'
import useDebounce from '@/hooks/useDebounce'

export default function UserSearch() {
  const [keyword, setKeyword] = useState('')
  const debounceKeyword = useDebounce(keyword)
  const { data: users, isLoading, error } = useSWR<SearchUser[]>(`api/search/${debounceKeyword}`)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="w-full h-full m-w-[600px] mx-auto flex flex-col bg-gray-50">
      <form className="m-4" onSubmit={onSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Search for a user name"
          onChange={(e) => setKeyword(e.target.value)}
          className="bg-gray-200 w-full h-10 p-2 px-4 rounded-md focus:outline-none"
        />
      </form>
      {error && <p>에러 발생</p>}
      {isLoading && (
        <div className="flex items-center justify-center h-[600px]">
          <GridSpinner />
        </div>
      )}
      {!isLoading && !error && !users?.length && <p>찾는 사용자가 없음</p>}
      <ul className="w-full p-4">
        {users &&
          users.map((user, index) => (
            <li key={index} className="p-2 cursor-pointer hover:bg-gray-100 rounded-sm bg-white my-2">
              <UserCard user={user} />
            </li>
          ))}
      </ul>
    </section>
  )
}
