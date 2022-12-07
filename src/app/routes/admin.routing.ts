import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './auth-guard';
import { CategoryAddComponent } from '../components/category-add/category-add.component';
import { CategoryListComponent } from '../components/category-list/category-list.component';
import { CategoryEditComponent } from '../components/category-edit/category-edit.component';

const routes: Routes = [
    {path: 'admin',component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'category-add',component: CategoryAddComponent},
    {path: 'category-list',component: CategoryListComponent},
    {path: 'category-edit/:id',component: CategoryEditComponent},

]

export const AdminRoutes = RouterModule.forChild(routes)