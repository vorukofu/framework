export interface IEventEmitter {
  emit(event: Event): void
  subscribe(type: string, callback: EventListenerOrEventListenerObject): void
  removeListener(
    type: string,
    callback: EventListenerOrEventListenerObject
  ): void
}
