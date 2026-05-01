import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';




bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));




