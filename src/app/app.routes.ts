import { Routes } from '@angular/router';
import { SonarComponentComponent } from './sonar-component/sonar-component.component';

export const routes: Routes = [
  {
    path: '',
    component: SonarComponentComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
