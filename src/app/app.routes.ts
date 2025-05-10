import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/sesion/login/login.component';
import { MyTimeComponent } from './page/my-time/my-time.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {
        path: "login", component: LoginComponent
    },
    {
        path: "my-time", component: MyTimeComponent
    }
];
