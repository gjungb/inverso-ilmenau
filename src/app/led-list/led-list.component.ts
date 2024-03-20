import { Component, inject } from '@angular/core';
import type { Leds } from '../model/led';
import { LedComponent } from '../led/led.component';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ColorService } from '../shared/color.service';
import { RouterLink } from '@angular/router';

/**
 * Stateful
 */
@Component({
  selector: 'pi-led-list',
  standalone: true,
  imports: [LedComponent, NgForOf, AsyncPipe, RouterLink],
  templateUrl: './led-list.component.html',
  styleUrl: './led-list.component.scss',
})
export class LedListComponent {
  /**
   *
   * @private
   */
  #colorService = inject(ColorService);

  /**
   * The Observable stream of leds
   */
  leds$ = this.#colorService.readLeds();

  /**
   * The static array of leds
   */
  leds: Leds = this.#colorService.readLedsSync();

  /**
   *
   * @param color
   */
  handleColorsChange(color: string): void {
    this.leds$ = this.#colorService.updateLeds(color);
  }

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
