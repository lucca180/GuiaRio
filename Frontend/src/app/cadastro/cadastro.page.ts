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

    senhaIgual = true;

    constructor( public formbuilder: FormBuilder, 
                 private storage: Storage, 
                 public router: Router, 
                 public toastController: ToastController, 
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

    //Função para o toast quando a confirmação de senha estiver incorreta.
    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Você não confirmou sua senha corretamente, tente novamente.',
            duration: 2000
        });
        toast.present();
    }

    //Função repsonsável pelo envio do formulário e no comentário uma função que envia e pega o nome(nesse caso) no storage.
    //Também está responsável por levar o usuário para o login se o cadastro for válido.

    submitForm( form ) {
        this.senhaIgual = form.value.passwordConfirm == form.value.password
        let array = JSON.stringify(form.value);
        if ( this.senhaIgual == true ) {
            console.log( array );
            console.log( form );
            console.log( form.value );
            return this.registrarUsuario( form );
        //  this.storage.set('name', this.registerForm.value.name).then(
        //     (valor) => {
        //          console.log(valor);
        //            this.get();
        //     }
        // );
        }
        //linha que chama o toast
        else {
            return this.presentToast();
        }
    }

    // Função que pega o nome no storage.

    // get() {
    //     this.storage.get('name');
    // }

    //Função para registrar o usuário no banco de dados(integração)

    registrarUsuario( form ) {
        if ( form.status == "VALID" ) {
            this.authService.register( form.value ).subscribe(
                ( res ) => {
                    console.log( res );
                    this.router.navigate(['../login']);
                }
            );
        }
    }


}
