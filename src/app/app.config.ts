import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { API_URL } from './app.di';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: API_URL,
      useValue:
        'https://347eb1836965ec040f474bd7f78d4730.balena-devices.com/api',
    },
  ],
};
