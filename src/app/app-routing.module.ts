import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NoRouterComponent } from './no-router/no-router.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './auth/auth.guard';
import { UsersComponent } from './admin/users/users.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { NewComponent } from './admin/users/new/new.component';
import { ListsComponent } from './admin/users/lists/lists.component';
import { DashbroadComponent } from './admin/dashbroad/dashbroad.component';
import { EditComponent } from './admin/users/edit/edit.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [authGuard],
      children: [
        { path: '', redirectTo: 'dashbrod', pathMatch: 'full'},
        { path: 'dashbrod', component: DashbroadComponent },
        { path: 'users', component: UsersComponent,
          children: [
            { path: '', redirectTo: 'lists', pathMatch: 'full'},
            { path: 'edit/:id', component: EditComponent },
            { path: 'new', component: NewComponent },
            { path: 'lists', component: ListsComponent },
          ]
        },
        { path: 'settings', component: SettingsComponent },
      ]
    },
    { path: '**', component: NoRouterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
