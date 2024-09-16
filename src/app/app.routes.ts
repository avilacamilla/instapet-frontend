import { CanActivateFn, Router, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { FeedComponent } from './pages/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

//Existindo token, retorna true. Se não, redireciona para o login - proteção de rota
const enableFeed: CanActivateFn = (route,state) => {
  const router = inject(Router);

  const enabled = !!localStorage.getItem("token");

  return enabled || router.navigate(['/login'], { state: { animate: 'slideRight' } });
}

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',  
    component: SignupComponent
  },
  {
    path: 'feed',
    component: FeedComponent,
    canActivate: [enableFeed]
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
