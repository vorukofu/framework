export type VNodeProperties = Record<string, any>
export type VNodeChildren = string | VNode[]

export interface VNode {
  tag: keyof HTMLElementTagNameMap
  props: VNodeProperties | undefined
  children: VNodeChildren
}
