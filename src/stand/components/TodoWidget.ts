import { reactive } from '@/modules/Reactive'
import { h } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

import { ITodo } from '../models'
import { Button } from './Button'
import { Input } from './Input'
import { TodoList } from './TodoList'

const todos = reactive<ITodo[]>([])
const inputState = reactive<{ value: string }>({ value: '' })

function handleAddTodo() {
  const id = Date.now()
  todos.push({ id, title: `Task: ${id}; ${inputState.value}` })
}

function handleDeleteTodo(e: MouseEvent) {
  const id = e?.target?.getAttribute('data-id')
  if (!id) return

  const index = todos.findIndex((todo) => todo.id === Number(id))
  if (index !== -1) todos.splice(index, 1)
}

function handleInputChange(e: InputEvent) {
  inputState.value = e.target?.value
}

export const TodoWidget: FC = () => {
  return h('div', { class: 'todo-widget' }, [
    Input({ handleChange: handleInputChange }),
    TodoList({ items: todos, handleDeleteTodo }),
    Button({ title: 'Add todo', handleClick: handleAddTodo }),
  ])
}
