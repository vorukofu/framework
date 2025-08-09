import { VNode } from '@/core/models/VNode'

import { IComponent } from '../model'

export class Component implements IComponent {
  render(): VNode {
    return { tag: 'template', props: undefined, children: '' }
  }
}
