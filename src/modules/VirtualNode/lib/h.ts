import {
  Vnode,
  VnodeAttributes,
  VnodeChildren,
  VnodeTag,
} from '../models/Vnode'

/*
 * Create Vnode
 */
export function h(
  tag: VnodeTag,
  attributes?: VnodeAttributes,
  children?: VnodeChildren
): Vnode {
  return {
    tag,
    attributes: attributes || {},
    children: children || [],
    _meta: {},
  }
}
