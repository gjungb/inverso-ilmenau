import { Pipe, PipeTransform } from '@angular/core';
import Color from 'colorjs.io';

@Pipe({
  name: 'piColor',
  standalone: true,
})
export class ColorPipe implements PipeTransform {
  /**
   *
   * @param value
   * @param format
   */
  transform(value: string, format = 'hex'): string {
    const c = new Color(value);
    return c.toString({
      format: format,
    });
  }
}
