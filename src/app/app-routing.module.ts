import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NoRouterComponent } from './no-router/no-router.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component: NoRouterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
