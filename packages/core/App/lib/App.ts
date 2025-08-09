import { VNode } from '@/core/models/VNode'

import { IApp } from '../models'

export class App implements IApp {
  create(node: VNode): VNode {
    return node
  }
}
