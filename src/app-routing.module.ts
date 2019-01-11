import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { ErrorComponent } from './app/error/error.component';

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "**", component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }