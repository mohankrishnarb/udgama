import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { ResetPassword } from "./reset-password/reset-password";

export const auth_routes: Routes = [
    { path:'', component: Login },
    { path:'signup', component: Signup },
    { path:'reset-password', component: ResetPassword }
]