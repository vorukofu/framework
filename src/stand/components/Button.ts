import { reactive } from '@/modules/Reactive'
import { h } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

interface Props {
  title: string
  handleClick: () => void
}

const iter = reactive<{ value: number }>({ value: 0 })

export const Button: FC<Props> = ({ title, handleClick }) => {
  return h(
    'button',
    {
      class: 'button',
      onclick: () => {
        iter.value++
      },
    },
    title + iter.value
  )
}
