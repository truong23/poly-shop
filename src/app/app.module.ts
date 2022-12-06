import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './components/star/star.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminRoutes } from './routes/admin.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routers: Routes = [
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product-add', component: ProductAddComponent},
  {path: '', pathMatch: 'full', redirectTo: 'product-list'},
  {path: '**', component: NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent,
    DashboardComponent,
    NotFoundComponent,
    LoginComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutes,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
