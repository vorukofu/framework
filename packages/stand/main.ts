import { App, Component } from '@/main'

class Test extends Component {
  constructor() {
    super()
  }

  #onClick() {
    console.log('click')
  }

  override render() {
    return this.h('div', undefined, [
      this.h('h1', { class: 'heading', onclick: this.#onClick }, 'Hello'),
    ])
  }
}

const com = new Test().render()
const AppConfig = new App(document.getElementById('app')!, com)

AppConfig.create()
