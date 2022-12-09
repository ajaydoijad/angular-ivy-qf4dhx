import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form: any;
  err: string;

  constructor(private authservice: AuthService) {}

  loginMode: boolean = true;
  error: string = null;
  ngOnInit() {}

  onswitchMode() {
    this.loginMode = !this.loginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.loginMode = true;

    if (this.loginMode) {
      // ......
    } else {
      this.authservice.signUp(email, password).subscribe(
        (resData) => {
          console.log(resData);
        },
        (errorMsg) => {
          console.log(errorMsg);
          this.error = errorMsg;
        }
      );
    }

    form.reset();
  }
}
