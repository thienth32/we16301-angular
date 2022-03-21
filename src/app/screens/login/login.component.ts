import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form trong angular
  /**
   * Bắt buộc:
   * 1. FormsModule trong app module
   * 2. Lựa chọn sử dụng loại form nào
   * - template driven form (ngModel)
   * - reactive form (FormGroup, FormControl)
   * 2.1 Nếu sử dụng reactive form => bổ sung thêm ReactiveFormsModule trong app module
   */

  // tạo ra reactive form object
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
