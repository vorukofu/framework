import { h } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

import { TodoWidget } from '../components/TodoWidget'
import './index.css'

export const App: FC = () => {
  return h('div', { class: 'app' }, [
    h('h1', undefined, 'Enter todo'),
    TodoWidget({}),
  ])
}
