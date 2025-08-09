import { EventEmitter } from '@/core/EventEmitter'
import {
  VNode,
  VNodeChildren,
  VNodeProperties,
  VNodeTag,
} from '@/core/models/VNode'

import { IComponent } from '../model'

export class Component extends EventEmitter implements IComponent {
  constructor() {
    super()
  }

  protected h(
    tag: VNodeTag,
    properties?: VNodeProperties,
    children?: VNodeChildren
  ): VNode {
    return { tag, properties, children }
  }

  render(): VNode {
    return this.h('template')
  }
}
