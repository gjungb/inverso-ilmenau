import {Component, EventEmitter, Input, Output} from '@angular/core';
import type {Led} from "../model/led";

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
  imports: [],
  templateUrl: './led.component.html',
  styleUrl: './led.component.scss'
})
export class LedComponent {
  /**
   * The Led to display in the component
   */
  @Input({
    required: true
  })
  led!: Led;

  /**
   * Will emit the index of the current Led
   */
  @Output()
  ledColorChange = new EventEmitter<number>();

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

}
