import { h } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

interface Props {
  handleChange: (e: InputEvent) => void
}

export const Input: FC<Props> = ({ handleChange }) => {
  return h('input', { class: 'input', oninput: handleChange })
}
