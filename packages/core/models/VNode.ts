export type VNodeProperties = Record<string, any> | undefined
export type VNodeChildren = string | VNode[] | undefined

export interface VNode {
  tag: keyof HTMLElementTagNameMap
  props: VNodeProperties
  children: VNodeChildren
}
