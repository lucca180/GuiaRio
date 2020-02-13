import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

    registerForm: FormGroup;

    loading: boolean = false;

    errorMessage: string;

    senhaIgual = true;

    constructor( public formbuilder: FormBuilder, 
                 private storage: Storage, 
                 public router: Router, 
                 public toast: ToastController, 
                 public authService: AuthService, ) {

        //Código responsável pelo registro dos campos do formulário.

        this.registerForm = this.formbuilder.group({
            first_name: [null, [Validators.required, Validators.minLength(3)]],
            last_name: [null, [Validators.required, Validators.minLength(3)]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
            passwordConfirm: [null, [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit() {
    }

    //Função para o toast quando a confirmação está incorreta.
    async presentToast() {
        if (this.errorMessage){
            const toast = await this.toast.create({
                message: this.errorMessage,
                duration: 2000
            });
            toast.present();
        }
    }

    //Função repsonsável pelo envio do formulário e no comentário uma função que envia e pega o nome(nesse caso) no storage.
    //Também está responsável por levar o usuário para o login se o cadastro for válido.

    submitForm( form ) {
        return this.registrarUsuario( form );
    }

    //Função para registrar o usuário no banco de dados(integração)

    registrarUsuario( form ) {
        if ( form.status == "VALID" ) {
            this.loading = true;
            this.authService.register( form.value ).subscribe(
                ( res ) => {
                    this.router.navigate(['../login']);
                },
            e => {       
                this.loading = false;
                this.errorMessage = e.error.message;
                console.error(e);
                this.presentToast();
            });
        }
    }
}
