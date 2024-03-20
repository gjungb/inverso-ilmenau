import { Component } from '@angular/core';
import { ColorFormComponent } from '../color-form/color-form.component';
import { LedListComponent } from '../led-list/led-list.component';

@Component({
  selector: 'pi-dashboard',
  standalone: true,
  imports: [ColorFormComponent, LedListComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
