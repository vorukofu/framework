import { effect } from '@/modules/Reactive'
import { mount, patchVdom } from '@/modules/VirtualDOM'
import { createElementFromVnode } from '@/modules/VirtualDOM/lib/createElementFromVnode'
import { Vnode } from '@/modules/VirtualNode'
import { FC } from '@/shared/models/FunctionComponent'

export function createApp(component: FC<void>) {
  const render = (selector: string) => {
    const container = document.querySelector(selector) as HTMLElement
    if (!container) return

    let prevVdom: Vnode | undefined

    effect(() => {
      const vdom = component()

      if (prevVdom === undefined) {
        mount(createElementFromVnode(vdom), container)
        prevVdom = vdom
      } else {
        patchVdom(prevVdom, vdom)
        prevVdom = vdom
      }
    })
  }

  return { render }
}
