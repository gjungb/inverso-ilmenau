import {inject, Injectable} from '@angular/core';
import {Leds} from "../model/led";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  httpClient = inject(HttpClient);

  /**
   *
   */
  readLeds(): Leds {
    return [
      {
        index: 0,
        color: 'lightpink'
      },
      {
        index: 1,
        color: 'lightblue'
      }
    ];
  }
}
