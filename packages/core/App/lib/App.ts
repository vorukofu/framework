import { IComponent } from '@/core/Component'
import { EventEmitter } from '@/core/EventEmitter'
import { IVirtualDOM, VirtualDOM } from '@/core/VirtualDOM'

import { IApp } from '../models'

/**
 * Framework application manager.
 */
export class App implements IApp {
  #VirtualDOM: IVirtualDOM
  #rootComponent: IComponent

  constructor(appElement: HTMLElement, rootComponent: IComponent) {
    this.#VirtualDOM = new VirtualDOM(appElement)
    this.#rootComponent = rootComponent

    this.#subscribeListeners()
  }

  /**
   * Subscribe listeners for framework
   */
  #subscribeListeners(): void {
    EventEmitter.subscribe('update-dom', () => {
      this.create()
    })
  }

  /**
   * Creates the DOM tree.
   */
  create(): void {
    const tree = this.#rootComponent.render()
    this.#VirtualDOM.renderDiff(tree)
  }
}
