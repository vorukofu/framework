import { h } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

interface Props {
  title: string
  handleClick: () => void
}

export const Button: FC<Props> = ({ title, handleClick }) => {
  return h(
    'button',
    {
      class: 'button',
      onclick: handleClick,
    },
    title
  )
}
