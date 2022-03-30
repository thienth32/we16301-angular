import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { QuizResultComponent } from './screens/quiz-result/quiz-result.component';
import { QuizComponent } from './screens/quiz/quiz.component';
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
      },
      {
        path: 'quiz/:monhoc',
        component: QuizComponent
      },
      {
        path: "ket-qua/:idStudent/:monhoc",
        component: QuizResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
