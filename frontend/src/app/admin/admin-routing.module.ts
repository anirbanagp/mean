import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestGuard } from '../shared/guards/guest.guard';
import { AuthGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [GuestGuard] },
  { path: '/dashboard', component: DashboardComponent, canActivateChild: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
