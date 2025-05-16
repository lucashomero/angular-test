// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FirstComponentComponent } from './componentes/first-component/first-component.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';

export const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent},
];
