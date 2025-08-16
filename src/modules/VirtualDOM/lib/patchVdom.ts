import { Vnode } from '@/modules/VirtualNode'

import { setAttributes } from './setAttributes'
import { updateChildren } from './updateChildren'

export function patchVdom(v1: Vnode, v2: Vnode): void {
  const element = (v2._meta.el = v1._meta.el)
  if (!element) return

  setAttributes(element, v2)
  updateChildren(element, v1, v2)
}
