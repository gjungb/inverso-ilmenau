import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LedComponent} from "./led/led.component";
import {LedListComponent} from "./led-list/led-list.component";

@Component({
  selector: 'pi-root',
  standalone: true,
  imports: [RouterOutlet, LedComponent, LedListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inverso-ilmenau';
}
