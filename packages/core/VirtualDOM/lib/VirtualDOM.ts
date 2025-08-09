import { VNode, VNodeChildren, VNodeProperties } from '@/core/models/VNode'

import { IVirtualDOM } from '../models'

/**
 * VirtualDOM class responsible for creating and rendering
 * a real DOM tree from a virtual node structure.
 */
export class VirtualDOM implements IVirtualDOM {
  #rootElement: HTMLElement

  /**
   * Creates an instance of VirtualDOM.
   * @param appElement - The root HTML element for rendering the virtual DOM tree
   */
  constructor(rootElement: HTMLElement) {
    this.#rootElement = rootElement
  }

  /**
   * Renders the virtual node tree by creating real DOM elements
   * and mounting it into the root element.
   * @param node - The root virtual node to render
   */
  renderDiff(node: VNode): void {
    const tree = this.#createElement(node)
    this.#renderTreeInAppElement(tree)
  }

  /**
   * Clears the root element and appends the generated DOM tree.
   * @param tree - The DOM element tree to render inside the root element
   */
  #renderTreeInAppElement(tree: HTMLElement): void {
    this.#rootElement.innerHTML = ''
    this.#rootElement.append(tree)
  }

  /**
   * Creates a DOM element from a virtual node.
   * @param node - Virtual node describing the element
   * @returns The created HTMLElement
   */
  #createElement(node: VNode): HTMLElement {
    const element = document.createElement(node.tag)

    if (node.properties) this.#setElementAttributes(element, node.properties)
    if (node.children) this.#setElementChildren(element, node.children)

    return element
  }

  /**
   * Sets attributes and event listeners on an element.
   * Event listeners are identified by keys starting with 'on'.
   * @param element - Target HTMLElement
   * @param nodeProperties - Attributes and events to set
   */
  #setElementAttributes(
    element: HTMLElement,
    nodeProperties: VNodeProperties
  ): void {
    Object.entries(nodeProperties).forEach(([key, value]) => {
      if (key.startsWith('on')) {
        const eventName = key.slice(2)
        element.addEventListener(eventName, value)
        return
      }

      element.setAttribute(key, String(value))
    })
  }

  /**
   * Sets the children of a DOM element.
   * Children can be a string or an array of virtual nodes.
   * @param element - Parent HTMLElement
   * @param children - Children nodes or text content
   */
  #setElementChildren(element: HTMLElement, children: VNodeChildren): void {
    if (typeof children === 'string') {
      element.textContent = children
      return
    }

    if (Array.isArray(children)) {
      children.forEach((child) => {
        const childElement = this.#createElement(child)
        element.append(childElement)
      })
      return
    }
  }
}
