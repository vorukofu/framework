export interface IEventEmitter {
  emit(event: Event): void
  subscribe(type: string, callback: EventListenerOrEventListenerObject): void
  destroy(type: string, callback: EventListenerOrEventListenerObject): void
}
