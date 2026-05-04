import { App } from './app/app';
import { config } from './app/app.config.server';
import 'zone.js'; // Included with Angular CLI.


const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
