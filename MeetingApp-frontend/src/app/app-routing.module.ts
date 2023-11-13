import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsComponent} from "./events-list/events.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {CreateEventComponent} from "./create-event/create-event.component";
import {AuthGuard} from "./auth/auth.guard";
import {ProfileComponent} from "./profile/profile.component";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent, children: [
      // { path: ':id/:name', component: UserComponent }
    ] },
  {path: 'register', component: RegisterComponent},
  {path: 'create', component: CreateEventComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] , pathMatch: 'full' },
  { path: '', component: EventsComponent , canActivate: [AuthGuard] , pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
