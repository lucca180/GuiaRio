import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';


import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, 
              private storage: Storage, 
              public formbuilder: FormBuilder,
              public authService: AuthService, ) {

      this.loginForm = this.formbuilder.group({
          email: [null, [Validators.required, Validators.email]],
          password: [null, [Validators.required, Validators.minLength(6)]]
      });
  }

  submitForm(form) {
      console.log(form.value);
      this.login(form);
  }

  ngOnInit() {
  }

  login( form ) {
      if ( form.status == "VALID" ) {
          this.authService.logarUsuario( form.value ).subscribe(res => {
              console.log( res.message );
              localStorage.setItem( 'userToken', res.data.token );
              this.router.navigate(['../tabs/home'])
      });
    }
  }

}


