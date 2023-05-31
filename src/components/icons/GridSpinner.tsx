import dynamic from 'next/dynamic'
const DynamicGridLoader = dynamic(
  () => import('react-spinners').then((lib) => lib.GridLoader),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
)

type Props = {
  color?: string
}

export default function GridSpinner({ color = 'blue' }: Props) {
  return <DynamicGridLoader color={color} />
}
