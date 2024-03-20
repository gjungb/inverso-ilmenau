import { InjectionToken } from '@angular/core';

/**
 *
 */
export const API_URL = new InjectionToken<string>(
  'Base URL for the REST API on the Raspberry Pi',
);
