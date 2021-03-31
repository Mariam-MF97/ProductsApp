import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fieldTextType: boolean;
  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['',
        [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['',
        [Validators.required,
        Validators.minLength(8)]],
      username: ['',
        [Validators.required]]
    })
  }
  ngOnInit(): void {
  }

  loginSubmit(){
    //console.log(this.loginForm);
    this.router.navigate(['/products']);
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
