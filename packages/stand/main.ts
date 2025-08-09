import { EventEmitter } from '@/core/EventEmitter'
import { App, Component } from '@/main'

class Test extends Component {
  #title: string = 'Hello'

  #onClick() {
    this.#title = 'Hello render'
    EventEmitter.emit('update-dom')
  }

  public ping() {
    console.log('hello')
  }

  override render() {
    return this.h('div', undefined, [
      this.h(
        'h1',
        { class: 'heading', onclick: this.#onClick.bind(this) },
        this.#title
      ),
    ])
  }
}

const Testc = new Test()
const AppConfig = new App(document.getElementById('app')!, Testc)

AppConfig.create()
