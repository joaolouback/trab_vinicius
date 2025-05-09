import { Routes } from "@angular/router";
import { SigninComponent } from "./signin.component";
import { SignupComponent } from "./signup.component";
import { AuthenticationComponent } from "./authentication.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', 'title': 'Autenticação | Signup', component: SigninComponent },
    { path: 'signup', 'title': 'Autenticação | Signin', component: SignupComponent },
    { path: 'autenticacao', 'title': 'Autenticação | Logout', component: LogoutComponent }

];