import { VNode } from '@/core/models/VNode'

import { IApp } from '../models'

/**
 * Framework application manager.
 */
export class App implements IApp {
  /**
   * Creates the root virtual node.
   *
   * @param node - The root virtual node.
   * @returns The provided virtual node.
   */
  create(node: VNode): VNode {
    return node
  }
}
