export type Comment = {
  comment: string
  username: string
  image?: string | undefined | null
}

export type SimplePost = Omit<FullPost, 'comments'> & {
  comments: number
}

export type FullPost = {
  id: string
  username: string
  userImage: string
  text: string
  name: string
  email: string
  image: string
  createdAt: String
  likes: string[]
  comments: Comment[]
}
