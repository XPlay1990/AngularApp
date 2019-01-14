import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuarService } from './service/route-guard.service';

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "logout", component: LogoutComponent, canActivate:[RouteGuarService] },
    { path: "welcome/:name", component: WelcomeComponent, canActivate:[RouteGuarService] },
    { path: "todos", component: TodosComponent, canActivate:[RouteGuarService] },
    { path: "**", component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }