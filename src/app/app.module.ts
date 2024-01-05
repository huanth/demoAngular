import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { NewComponent } from './admin/users/new/new.component';
import { ListsComponent } from './admin/users/lists/lists.component';
import { DashbroadComponent } from './admin/dashbroad/dashbroad.component';
import { EditComponent } from './admin/users/edit/edit.component';

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
    NewComponent,
    ListsComponent,
    DashbroadComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
