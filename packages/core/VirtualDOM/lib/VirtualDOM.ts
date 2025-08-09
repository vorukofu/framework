import { VNode, VNodeChildren, VNodeProperties } from '@/core/models/VNode'

import { IVirtualDOM } from '../models'

export class VirtualDOM implements IVirtualDOM {
  #appElement: HTMLElement

  constructor(appElement: HTMLElement) {
    this.#appElement = appElement
  }

  renderDiff(node: VNode): void {
    const tree = this.#createElement(node)
    this.#renderTreeInAppElement(tree)
  }

  #renderTreeInAppElement(tree: HTMLElement): void {
    this.#appElement.innerHTML = ''
    this.#appElement.append(tree)
  }

  #createElement(node: VNode): HTMLElement {
    const element = document.createElement(node.tag)

    if (node.properties) this.#setElementAttributes(element, node.properties)
    if (node.children) this.#setElementChildren(element, node.children)

    return element
  }

  #setElementAttributes(
    element: HTMLElement,
    nodeProperties: VNodeProperties
  ): void {
    Object.entries(nodeProperties).forEach(([key, value]) => {
      element.setAttribute(key, String(value))
    })
  }

  #setElementChildren(element: HTMLElement, children: VNodeChildren): void {
    if (typeof children === 'string') {
      element.textContent = children
    } else if (Array.isArray(children)) {
      children.forEach((child) => {
        const childElement = this.#createElement(child)
        element.append(childElement)
      })
    }
  }
}
