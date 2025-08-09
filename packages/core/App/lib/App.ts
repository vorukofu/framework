import { VNode } from '@/core/models/VNode'
import { IVirtualDOM, VirtualDOM } from '@/core/VirtualDOM'

import { IApp } from '../models'

/**
 * Framework application manager.
 */
export class App implements IApp {
  #VirtualDOM: IVirtualDOM
  #appNode: VNode

  constructor(appElement: HTMLElement, appNode: VNode) {
    this.#VirtualDOM = new VirtualDOM(appElement)
    this.#appNode = appNode
  }

  /**
   * Creates the DOM tree.
   */
  create(): void {
    this.#VirtualDOM.renderDiff(this.#appNode)
  }
}
