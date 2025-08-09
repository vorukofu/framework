/**
 * A wrapper around the native EventTarget that provides
 * a simplified API for subscribing and emitting events
 * within the framework.
 */
export class EventEmitter {
  static #eventTarget = new EventTarget()

  /**
   * Emits an event to all registered listeners.
   *
   * @param type - The Event type to dispatch.
   */
  static emit(type: string): void {
    this.#eventTarget.dispatchEvent(new Event(type))
  }

  /**
   * Subscribes to a specific event type.
   *
   * @param type - The event type to listen for.
   * @param callback - The event handler function or object.
   */
  static subscribe(
    type: string,
    callback: EventListenerOrEventListenerObject
  ): void {
    this.#eventTarget.addEventListener(type, callback)
  }

  /**
   * Removes a specific event listener.
   *
   * @param type - The event type to remove the listener from.
   * @param callback - The event handler to remove.
   */
  static removeListener(
    type: string,
    callback: EventListenerOrEventListenerObject
  ): void {
    this.#eventTarget.removeEventListener(type, callback)
  }
}
