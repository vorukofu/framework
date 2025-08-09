export type VNodeTag = keyof HTMLElementTagNameMap
export type VNodeProperties = Record<string, any>
export type VNodeChildren = string | VNode[]

export interface VNode {
  tag: VNodeTag
  properties?: VNodeProperties
  children?: VNodeChildren
}
