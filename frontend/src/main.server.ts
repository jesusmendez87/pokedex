import { App } from './app/app';
import { config } from './app/app.config.server';
//import 'zone.js'; // Included with Angular CLI.
import { bootstrapApplication } from '@angular/platform-browser';

export default function bootstrap() {
  return bootstrapApplication(App, config);
}
