export type VNodeTag = keyof HTMLElementTagNameMap
export type VNodeProperties = Record<string, any> | undefined
export type VNodeChildren = string | VNode[] | undefined

export interface VNode {
  tag: VNodeTag
  properties: VNodeProperties
  children: VNodeChildren
}
