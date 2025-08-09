import { IEventEmitter } from '../models'

/**
 * A wrapper around the native EventTarget that provides
 * a simplified API for subscribing and emitting events
 * within the framework.
 */
export class EventEmitter implements IEventEmitter {
  /**
   * Internal EventTarget instance used to manage events.
   * @private
   */
  #eventTarget = new EventTarget()

  /**
   * Emits an event to all registered listeners.
   *
   * @param event - The Event instance to dispatch.
   */
  emit(event: Event): void {
    this.#eventTarget.dispatchEvent(event)
  }

  /**
   * Subscribes to a specific event type.
   *
   * @param type - The event type to listen for.
   * @param callback - The event handler function or object.
   */
  subscribe(type: string, callback: EventListenerOrEventListenerObject): void {
    this.#eventTarget.addEventListener(type, callback)
  }

  /**
   * Removes a specific event listener.
   *
   * @param type - The event type to remove the listener from.
   * @param callback - The event handler to remove.
   */
  removeListener(
    type: string,
    callback: EventListenerOrEventListenerObject
  ): void {
    this.#eventTarget.removeEventListener(type, callback)
  }
}
