import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 576 },
    items: 6,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
}

export default function ScrollableBar({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <Carousel responsive={responsive} containerClass="flex w-full max-w-[630px] mx-auto py-4">
      {children}
    </Carousel>
  )
}
