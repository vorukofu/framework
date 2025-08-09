import { VNode } from '@/core/models/VNode'

export interface IComponent {
  render(): VNode
}
