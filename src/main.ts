//import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import {AppModule} from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideFluentDesignSystem, fluentCard, fluentButton, fluentTextField } from '@fluentui/web-components';

provideFluentDesignSystem().register(
  fluentCard(), 
fluentButton(), 
// fluentTextField(),
fluentTextField());

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
