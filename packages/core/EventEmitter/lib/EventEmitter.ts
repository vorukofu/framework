import { IEventEmitter } from '../models'

/**
 *
 */
export class EventEmitter implements IEventEmitter {
  #eventTarget = new EventTarget()

  emit(event: Event): void {
    this.#eventTarget.dispatchEvent(event)
  }

  subscribe(type: string, callback: EventListenerOrEventListenerObject): void {
    this.#eventTarget.addEventListener(type, callback)
  }

  removeListener(
    type: string,
    callback: EventListenerOrEventListenerObject
  ): void {
    this.#eventTarget.removeEventListener(type, callback)
  }
}
