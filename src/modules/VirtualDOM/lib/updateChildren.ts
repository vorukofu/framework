import { Vnode } from '@/modules/VirtualNode'

import { createElementFromVnode } from './createElementFromVnode'
import { patchVdom } from './patchVdom'

/*
 * Update vnode children
 */
export function updateChildren(
  element: HTMLElement,
  v1: Vnode,
  v2: Vnode
): void {
  const oldChildren = v1.children
  const newChildren = v2.children

  if (typeof oldChildren === 'string' && typeof newChildren === 'string') {
    if (oldChildren !== newChildren) {
      const textNode = document.createTextNode(newChildren)
      element.innerHTML = ''
      element.append(textNode)
    }
    return
  }

  if (Array.isArray(newChildren) && Array.isArray(oldChildren)) {
    const maxLen = Math.max(oldChildren.length, newChildren.length)

    for (let i = 0; i < maxLen; i++) {
      const oldChild = oldChildren[i]
      const newChild = newChildren[i]

      if (!oldChild && newChild) {
        element.append(createElementFromVnode(newChild))
        continue
      }

      if (oldChild && !newChild && oldChild._meta.el) {
        element.removeChild(oldChild._meta.el)
        continue
      }

      if (typeof oldChild === 'object' && typeof newChild === 'object') {
        patchVdom(oldChild, newChild)
      }
    }
  }
}
