export interface IEventEmitter {
  emit(event: Event): void
  subscribe(type: string, callback: EventListenerOrEventListenerObject): void
  removeListeners(
    type: string,
    callback: EventListenerOrEventListenerObject
  ): void
}
