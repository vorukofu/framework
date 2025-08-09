import {
  VNode,
  VNodeChildren,
  VNodeProperties,
  VNodeTag,
} from '@/core/models/VNode'

import { IComponent } from '../model'

/**
 * Base class for all framework components.
 */
export class Component implements IComponent {
  /**
   * Creates a virtual node instance.
   *
   * @param tag - The HTML tag of the element.
   * @param properties - The element's attributes.
   * @param children - The element's child nodes.
   * @returns A virtual node object.
   */
  protected h(
    tag: VNodeTag,
    properties?: VNodeProperties,
    children?: VNodeChildren
  ): VNode {
    return { tag, properties, children }
  }

  /**
   * Method intended to be overridden in subclasses.
   * Must always return a virtual node.
   *
   * @returns A virtual node.
   */
  render(): VNode {
    return this.h('template')
  }
}
