import { App, Component } from '@/main'

class Test extends Component {
  constructor() {
    super()
  }

  override render() {
    return this.h('div', undefined, [
      this.h('h1', { class: 'heading' }, 'Hello'),
    ])
  }
}

const com = new Test().render()
const AppConfig = new App(document.getElementById('app')!, com)

AppConfig.create()
