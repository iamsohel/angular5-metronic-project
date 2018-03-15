import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule, Routes} from '@angular/router';

const routes : Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
