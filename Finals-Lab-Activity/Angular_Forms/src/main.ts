import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { TemplateDemo } from './app/template-demo/template-demo';
import { ReactiveDemo } from './app/reactive-demo/reactive-demo';
import { CustomDemo } from './app/custom-demo/custom-demo';

const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: 'template', component: TemplateDemo },
  { path: 'reactive', component: ReactiveDemo },
  { path: 'custom', component: CustomDemo}
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
