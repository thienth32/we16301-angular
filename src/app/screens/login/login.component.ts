import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  googleLogin(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(authData => {
        this.authService.login(authData.email, authData.id)
        .subscribe(response => {
          if(response){
            this.router.navigate(['/']);
          }else{
            alert("Tài khoản không tồn tại");
          }
        })
      })
  }

}
