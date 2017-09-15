import { RaceDetailsComponent } from './components/race-details/race-details.component';
import { RacesComponent } from './components/races/races.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {path: 'races', component: RacesComponent},
    {path: 'races/:id', component: RaceDetailsComponent}
];

@NgModule({
    declarations: [],
    imports: [CommonModule,
        RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }