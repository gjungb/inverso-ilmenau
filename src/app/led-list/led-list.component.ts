import { Component, inject } from '@angular/core';
import { Leds } from '../model/led';
import { LedComponent } from '../led/led.component';
import { NgForOf } from '@angular/common';
import { ColorService } from '../shared/color.service';

/**
 * Stateful
 */
@Component({
  selector: 'pi-led-list',
  standalone: true,
  imports: [LedComponent, NgForOf],
  templateUrl: './led-list.component.html',
  styleUrl: './led-list.component.scss',
})
export class LedListComponent {
  colorService = inject(ColorService);

  leds: Leds = this.colorService.readLeds();

  /**
   *
   * @param index
   */
  handleColorChange(index: number): void {
    const existing = this.leds[index];
    // state change
    this.leds[index] = {
      ...existing,
      color: 'darkblue',
    };
  }
}
