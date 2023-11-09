import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventsComponent} from "./events-list/events.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";

const appRoutes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'login', component: LoginComponent, children: [
      // { path: ':id/:name', component: UserComponent }
    ] },
  {path: 'register', component: RegisterComponent}

  // {
  //   path: 'servers',
  //   // canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: ServersComponent,
  //   children: [
  //     { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //     { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  //   ] },
  // // { path: 'not-found', component: PageNotFoundComponent },
  // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  // { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, )],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
