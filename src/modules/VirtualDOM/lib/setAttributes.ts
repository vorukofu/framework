import { Vnode } from '@/modules/VirtualNode'

/*
 * Set HTML attributes and add event listeners
 */
export function setAttributes(element: HTMLElement, vnode: Vnode): void {
  for (const [key, value] of Object.entries(vnode.attributes)) {
    if (key.startsWith('on')) {
      if (typeof value !== 'function') return
      element.addEventListener(key.slice(2).toLowerCase(), value)
      return
    }

    element.setAttribute(key, value)
  }
}
