import { h } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

import { ITodo } from '../models'

interface Props {
  todo: ITodo
}

export const Todo: FC<Props> = ({ todo }) => {
  return h('div', { class: 'todo', ['data-id']: todo.id }, [
    h('span', undefined, todo.title),
  ])
}
