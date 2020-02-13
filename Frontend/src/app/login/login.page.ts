import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  loading: boolean = false;

  errorMessage: string; 

  constructor(private router: Router, 
              private storage: Storage, 
              public formbuilder: FormBuilder,
              public authService: AuthService,
              public toast: ToastController, ) {

      this.loginForm = this.formbuilder.group({
          email: [null, [Validators.required, Validators.email]],
          password: [null, [Validators.required, Validators.minLength(6)]]
      });
  }

  submitForm(form) {
      this.login(form);
  }

  ngOnInit() {
  }

  login( form ) {
      if ( form.status == "VALID" ) {
          this.loading = true;
          this.authService.login( form.value ).subscribe(res => {
              localStorage.setItem( 'userData', JSON.stringify(res.data.user) );
              localStorage.setItem( 'userToken', res.data.token );
              location.replace("http://localhost:8100/tabs/home");
              //this.router.navigate(['../tabs/home'])
      }, e => {       
        this.loading = false;
        this.errorMessage = e.error.message;
        console.error(e);
        this.presentToast();
      });
    }
  }

  //Toast de erros no login.
  async presentToast() {
    if( this.errorMessage ) {
      const toast = await this.toast.create({
        message: this.errorMessage,
        duration: 2000,
      });
      toast.present();
    }
  }

}


