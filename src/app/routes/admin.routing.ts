import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from './auth-guard';

const routes: Routes = [
    {path: 'admin',component: DashboardComponent, canActivate: [AuthGuard]}
]

export const AdminRoutes = RouterModule.forChild(routes)