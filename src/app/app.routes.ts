import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MiniUrl } from './mini-url/mini-url';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'miniURL', component: MiniUrl }
];
