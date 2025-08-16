import { h } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

import { ITodo } from '../models'
import { Todo } from './Todo'

interface Props {
  items: ITodo[]
  handleDeleteTodo: (e: MouseEvent) => void
}

export const TodoList: FC<Props> = ({ items, handleDeleteTodo }) => {
  return h(
    'div',
    { class: 'todo-list', onclick: handleDeleteTodo },
    items.map((item) => {
      return Todo({ todo: item })
    })
  )
}
