import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import type { Led } from '../model/led';
import { ColorPipe } from '../shared/color.pipe';

/**
 * Stateless
 * Representational
 * Dumb
 *
 * ... Component
 */
@Component({
  selector: 'pi-led',
  standalone: true,
  imports: [ColorPipe],
  templateUrl: './led.component.html',
  styleUrl: './led.component.scss',
})
export class LedComponent {
  /**
   * The Led to display in the component
   */
  @Input({
    required: true,
  })
  led!: Led;

  /**
   * Will emit the index of the current Led
   */
  @Output()
  ledColorChange = new EventEmitter<number>();

  /**
   *
   */
  colorFormat = signal('rgb');

  /**
   *
   * @param ev
   */
  handleSelectBox(ev: MouseEvent): void {
    console.log('clicked', ev.clientX);
    // TODO set random color
    this.ledColorChange.emit(this.led.index);
    // internal state
    // this.led.color = 'red';
  }

  handleFormatChange() {
    this.colorFormat.update((format) => (format === 'rgb' ? 'hex' : 'rgb'));
  }
}
