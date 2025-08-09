import { VNode } from '@/core/models/VNode'

export interface IApp {
  create(node: VNode): VNode
}
