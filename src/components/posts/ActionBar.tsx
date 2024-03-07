import HeartIcon from '../ui/icons/HeartIcon'
import BookmarkIcon from '../ui/icons/BookmarkIcon'
import { RiChat1Line } from 'react-icons/ri'
import HeartFillIcon from '../ui/icons/HeartFillIcon'
import BookmarkFillIcon from '../ui/icons/BookmarkFillIcon'
import ToggleButton from '../ui/button/ToggleButton'
import { Comment, SimplePost } from '@/model/post'
import usePosts from '@/hooks/usePosts'
import useMe from '@/hooks/useMe'
import CommentForm from './CommentForm'

type Props = {
  post: SimplePost
  openModal: () => void
  children?: React.ReactNode
  onComment: (comment: Comment) => void
}

export default function ActionBar({ post, openModal, children, onComment }: Props) {
  const { id, likes } = post
  const { user, setBookmark } = useMe()
  const { setLike } = usePosts()

  const liked = user ? likes.includes(user.username) : false
  const bookmarked = user ? user.bookmarks.includes(id) : false

  const handleLike = (like: boolean) => {
    if (user) {
      setLike(post, user.username, like)
    }
  }

  const handleBookmark = (bookmark: boolean) => {
    if (user) {
      setBookmark(post.id, bookmark)
    }
  }

  const handleComment = (comment: string) => {
    user && onComment({ comment, username: user.username, image: user.image })
  }

  return (
    <>
      <div className="flex justify-between my-3">
        <div className="flex w-40">
          <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
          <RiChat1Line className="text-3xl ml-3 cursor-pointer" onClick={openModal} />
        </div>
        <ToggleButton
          toggled={bookmarked}
          onToggle={handleBookmark}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div>
        <p className="font-bold text-sm">{`좋아요 ${likes?.length ?? 0}개`}</p>
        {children}
      </div>

      <CommentForm onPostComment={handleComment} />
    </>
  )
}
