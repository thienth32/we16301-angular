import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dang-ky",
    component: RegisterComponent
  },
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
