import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.ValidateCompareConfirmPassword()
    ]),
    birthDate: new FormControl(new Date(), [
      Validators.required
    ]),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  ValidateCompareConfirmPassword(control: AbstractControl): ValidationErrors | null{
    // debugger;
    console.log(this.registerForm.value);
    // if(control.value != this.registerForm.controls['password'].value){
    //   return {
    //     confirmPasswordInvalid: true
    //   }
    // }
    return null;
  }

}
