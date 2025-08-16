import { Vnode } from '@/modules/VirtualNode'

import { setAttributes } from './setAttributes'
import { setChildren } from './setChildren'

/*
 * Create HTML node from virtual node
 */
export function createElementFromVnode(vnode: Vnode): HTMLElement {
  const element = document.createElement(vnode.tag)

  setAttributes(element, vnode)
  setChildren(element, vnode)

  vnode._meta.el = element
  return element
}
