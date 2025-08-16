import { FC } from '@/shared/models/FunctionComponent'

export interface VnodeMeta {
  el?: HTMLElement
}

export interface VnodeTagComponent<T = unknown> {
  render: FC<T>
  props?: T
}

export type VnodeTagHTMLKey = keyof HTMLElementTagNameMap
export type VnodeTag = VnodeTagHTMLKey

export type VnodeAttributes = Record<string, any>
export type VnodeChildren = string | Vnode[]

export interface Vnode {
  tag: VnodeTag
  attributes: VnodeAttributes
  children: VnodeChildren
  _meta: VnodeMeta
}
