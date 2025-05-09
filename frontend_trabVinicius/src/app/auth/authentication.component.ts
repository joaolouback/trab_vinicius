import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authentication',
  template: `
    <h1>Componente de Autenticação</h1>
    <header class="row spacing">
      <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-tabs">
          <li><a class="nav-link" 
            routerLinkActive="active" [routerLink]="['signup']">SignUp</a></li>
          <li><a class="nav-link"
            routerLinkActive="active" [routerLink]="['signin']">SignIn</a></li>
          <li><a class="nav-link"
            routerLinkActive="active" [routerLink]="['autenticacao']">Logout</a></li>
        </ul>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `
})
export class AuthenticationComponent {}

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AuthenticationComponent] // <- útil caso for usar fora deste módulo
})
export class AuthModule {}
