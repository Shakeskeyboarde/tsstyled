import { DomElement } from '../utils/getDomElement';

/**
 * A style manager adds style elements when new styles are used,
 * and removes them when they are no longer used.
 *
 * Using a custom style manager allows control over how style
 * elements are injected into the DOM.
 */
export interface IStyleManager {
  /**
   * Called when a unique style is used. Guaranteed not to be called
   * twice for the same ID before a call to `remove` the key.
   */
  add(key: string, style: DomElement<'style'>): void;

  /**
   * Called when a unique style is no longer in use. Guaranteed not
   * be called more than once per matching `add` call.
   */
  remove(key: string): void;
}
