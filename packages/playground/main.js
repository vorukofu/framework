import { App, Component } from './build/index.js'

class Test extends Component {
  constructor() {
    super()
  }

  render() {
    return this.h('div', undefined, [
      this.h('h1', { class: 'heading' }, 'Hello'),
    ])
  }
}

const com = new Test().render()
const AppConfig = new App(document.getElementById('app'), com)

AppConfig.create()
