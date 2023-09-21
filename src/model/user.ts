export type AuthUser = {
  username: string
  name?: string | null
  email?: string | null
  image?: string | null
}

export type SimpleUser = Pick<AuthUser, 'username' | 'image'>

export type HomeUser = AuthUser & {
  following: SimpleUser[]
  followers: SimpleUser[]
  bookmarks: string[]
}
export type SearchUser = AuthUser & {
  following: number
  followers: number
}

export type ProfileUser = SearchUser & {
  posts: number
}
