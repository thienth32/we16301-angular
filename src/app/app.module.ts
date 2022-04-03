import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetAgePipe } from './helpers/pipes/get-age.pipe';
import { LoginComponent } from './screens/login/login.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RegisterComponent } from './screens/register/register.component';
import { HomeComponent } from './screens/home/home.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { QuizResultComponent } from './screens/quiz-result/quiz-result.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { UploadFormComponent } from './screens/upload-form/upload-form.component';
@NgModule({
  declarations: [
    AppComponent,
    GetAgePipe,
    LoginComponent,
    HomeLayoutComponent,
    RegisterComponent,
    HomeComponent,
    QuizComponent,
    QuizResultComponent,
    UploadFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
