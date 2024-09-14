import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { FeedComponent } from './pages/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',  // Rota para a página de signup
    component: SignupComponent
  },
  {
    path: 'feed',  // Rota para a página de feed
    component: FeedComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' // Redireciona para a página de login ao acessar a raiz
  },
  {
    path: '**',
    redirectTo: '/login' // Redireciona para a página de login caso a rota não exista
  }
];
