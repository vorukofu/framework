import { VNode } from '@/core/models/VNode'

export interface IVirtualDOM {
  renderDiff(node: VNode): void
}
