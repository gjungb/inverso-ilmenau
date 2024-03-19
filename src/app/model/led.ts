/**
 * A single Led displayed on the Blinkt!
 *
 * @see ...
 */
export interface Led {
  /**
   * The 0-based index
   */
  index: number;
  /**
   * The color as a valid CSS name
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  color: string;
}

/**
 * A list of Leds
 */
export type Leds = Led[];
