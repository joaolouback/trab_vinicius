import { Routes } from '@angular/router';
import { MessageComponent } from './messages/message.component';
import { authenticationComponent } from './auth/authentication.component';

export const routes: Routes = [
    { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
    {path: 'mensagens', 'title': 'Mensagens', component: MessageComponent},
    {path: 'autenticacao', 'title': 'Autenticação', component: authenticationComponent }
];
  