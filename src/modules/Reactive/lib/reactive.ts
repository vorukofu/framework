import { Effect } from '../models/effect'

let activeEffect: undefined | Effect

export function reactive<T extends object>(initValues: T) {
  const deps = new Map()

  return new Proxy(initValues, {
    get(target, key) {
      if (activeEffect) {
        if (!deps.has(key)) deps.set(key, new Set())
        deps.get(key).add(activeEffect)
      }
      return target[key as keyof T]
    },

    set(target, key, value) {
      target[key as keyof T] = value
      if (deps.has(key)) {
        deps.get(key).forEach((fn) => fn())
      }
      return true
    },
  })
}

export function effect(fn: Effect) {
  activeEffect = fn
  fn()
  activeEffect = undefined
}
