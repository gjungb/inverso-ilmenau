import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { LedComponent } from './led/led.component';
import { Led } from './model/led';
import { inject } from '@angular/core';
import { ColorService } from './shared/color.service';
import { Observable } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'leds',
  },
  {
    path: 'leds',
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: ':index',
        component: LedComponent,
        canActivate: [
          (route: ActivatedRouteSnapshot) => {
            const colorService = inject(ColorService);
            const index = route.paramMap.get('index') as string;
            return colorService.isValidIndex(index);
          },
        ],
        resolve: {
          // The property needs to be named 'led' to match the input of the LedComponent
          led: (route: ActivatedRouteSnapshot): Observable<Led> => {
            const colorService = inject(ColorService);
            const index = Number(route.paramMap.get('index'));
            return colorService.readLed(index);
          },
        },
      },
    ],
  },
];
