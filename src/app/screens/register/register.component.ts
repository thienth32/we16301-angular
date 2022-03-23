import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { comparePasswordValidator } from 'src/app/helpers/validators/comparePassword';

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
      Validators.required
    ]),
    birthDate: new FormControl(new Date(), [
      Validators.required
    ]),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
    this.registerForm.controls['confirmPassword'].valueChanges.subscribe(data => {
      this.registerForm.controls['confirmPassword'].addValidators([
        comparePasswordValidator(this.registerForm.controls['password'].value)
      ]);
    })
  }

  

}
