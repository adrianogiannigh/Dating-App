import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideLocationMocks } from '@angular/common/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
 
//This is the configuration of the application
export const appConfig: ApplicationConfig = {
  providers: 
  [provideZoneChangeDetection({ eventCoalescing: true }), //This is used to provide the zone change detection
   provideRouter(routes), //This is used to provide the routes
   provideHttpClient(), //This is used to provide the HttpClient
   provideAnimations() //This is used to provide the animations
  ]
};
