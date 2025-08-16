import { Vnode } from '@/modules/VirtualNode'

import { createElementFromVnode } from './createElementFromVnode'

/*
 * Append children in HTML element
 */
export function setChildren(element: HTMLElement, vnode: Vnode): void {
  if (!vnode.children) return

  if (typeof vnode.children === 'string') {
    element.append(document.createTextNode(vnode.children))
    return
  }

  if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child) => {
      element.append(createElementFromVnode(child))
    })
    return
  }
}
