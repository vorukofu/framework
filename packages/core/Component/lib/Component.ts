import { EventEmitter } from '@/core/EventEmitter'
import { VNode } from '@/core/models/VNode'

import { IComponent } from '../model'

export class Component extends EventEmitter implements IComponent {
  constructor() {
    super()
  }

  render(): VNode {
    return { tag: 'template', props: undefined, children: '' }
  }
}
