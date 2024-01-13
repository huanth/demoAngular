import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NoRouterComponent } from './no-router/no-router.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { authGuardAdmin, authGuardLogin } from './auth/auth.guard';
import { UsersComponent } from './admin/users/users.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { NewComponent } from './admin/users/new/new.component';
import { ListsComponent } from './admin/users/lists/lists.component';
import { DashbroadComponent } from './admin/dashbroad/dashbroad.component';
import { EditComponent } from './admin/users/edit/edit.component';
import { BooksComponent } from './books/books.component';
import { ListComponent as  BooksListComponent} from './books/list/list.component';
import { DetailComponent } from './books/detail/detail.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [authGuardLogin],
      children: [
        { path: '', redirectTo: 'dashbroad', pathMatch: 'full'},
        { path: 'dashbroad', component: DashbroadComponent },
        { path: 'users', component: UsersComponent,  canActivate: [authGuardAdmin],
          children: [
            { path: '', redirectTo: 'list', pathMatch: 'full'},
            { path: 'edit/:id', component: EditComponent },
            { path: 'new', component: NewComponent },
            { path: 'list', component: ListsComponent },
          ]
        },
        { path: 'settings', component: SettingsComponent },
      ]
    },
    { path: 'book', component: BooksComponent, 
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full'},
        { path: 'list', component: BooksListComponent },
        { path: ':id', component: DetailComponent },
      ]
    },
    { path: '**', component: NoRouterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
