import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { NoRouterComponent } from './no-router/no-router.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { ListsComponent as ListUserAdmin  } from './admin/users/lists/lists.component';
import { DashbroadComponent } from './admin/dashbroad/dashbroad.component';
import { EditComponent as EditUser } from './admin/users/edit/edit.component';
import { DetailComponent as BookDetail } from './books/detail/detail.component';
import { NewComponent as NewUser } from './admin/users/new/new.component';
import { NewComponent as NewBookAdmin } from './admin/books/new/new.component';
import { ListsComponent as ListBookAdmin } from './admin/books/lists/lists.component';
import { EditComponent as EditBooksAdmin } from './admin/books/edit/edit.component';
import { BooksComponent as BooksAdmin } from './admin/books/books.component';
import { ListComponent as  BooksListComponent } from './books/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    BooksComponent,
    CartComponent,
    AuthComponent,
    LoginComponent,
    NoRouterComponent,
    HomeComponent,
    AdminComponent,
    UsersComponent,
    SettingsComponent,
    NewUser,
    ListUserAdmin,
    DashbroadComponent,
    EditUser,
    BookDetail,
    BooksListComponent,
    NewBookAdmin,
    ListBookAdmin,
    EditBooksAdmin,
    BooksAdmin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
