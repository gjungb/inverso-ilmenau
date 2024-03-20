import { Injectable, inject, signal } from '@angular/core';
import { Led, Leds } from '../model/led';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { API_URL } from '../app.di';

/**
 *
 */
// @ts-expect-error I do not know why this is necessary
@Injectable({
  providedIn: 'root',
})
export class ColorService {
  /**
   *
   * @private
   */
  #httpClient = inject(HttpClient);

  /**
   *
   * @private
   */
  #apiUrl = inject(API_URL);

  /**
   *
   * @private
   */
  static #MIN_INDEX = 0;

  /**
   *
   * @private
   */
  static #MAX_INDEX = 7;

  /**
   *
   */
  #leds = signal<Leds>([]);

  /**
   *
   */
  get leds() {
    return this.#leds.asReadonly();
  }

  /**
   *
   */
  readLeds(): Observable<Leds> {
    return this.#httpClient.get<string[]>(`${this.#apiUrl}/colors`).pipe(
      map((colors) => this.#transformColors(colors)),
      tap((leds) => this.#leds.set(leds)),
    );
  }

  /**
   *
   * @param index
   */
  readLed(index: number): Observable<Led> {
    return this.#httpClient
      .get(`${this.#apiUrl}/colors/${index}`, {
        responseType: 'text',
      })
      .pipe(map((color) => ({ color, index })));
  }

  /**
   *
   * @param color
   */
  updateLeds(color: string): Observable<Leds> {
    return this.#httpClient
      .put<string[]>(`${this.#apiUrl}/colors`, { color })
      .pipe(
        map((colors) => this.#transformColors(colors)),
        tap((leds) => this.#leds.set(leds)),
      );
  }

  /**
   *
   */
  readLedsSync(): Leds {
    return [
      {
        index: 0,
        color: 'lightpink',
      },
      {
        index: 1,
        color: 'lightblue',
      },
    ];
  }

  /**
   *
   * @param index
   */
  isValidIndex(index: string | number): boolean {
    let value: number;
    if (typeof index === 'number') {
      value = index;
    } else {
      value = parseInt(index, 10);
    }
    return value >= ColorService.#MIN_INDEX && value <= ColorService.#MAX_INDEX;
  }

  /**
   *
   * @param colors
   * @private
   */
  #transformColors(colors: string[]): Leds {
    return colors.map((color, index) => ({ color, index }));
  }
}
