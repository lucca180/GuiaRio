import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cadastro-guia',
    templateUrl: './cadastro-guia.page.html',
    styleUrls: ['./cadastro-guia.page.scss'],
})
export class CadastroGuiaPage implements OnInit {

    registerForm: FormGroup;

    senhaIgual = true;

    constructor(public formbuilder: FormBuilder, 
                private storage: Storage, 
                public router: Router, 
                public toastController: ToastController,
                public authService: AuthService,) {

        //Código responsável pelo registro dos campos do formulário.

        this.registerForm = this.formbuilder.group({
            first_name: [null, [Validators.required, Validators.minLength(3)]],
            last_name: [null, [Validators.required, Validators.minLength(3)]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
            passwordConfirm: [null, [Validators.required, Validators.minLength(6)]],
            is_guide: [true],
            cpf: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
            phone_number: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
            cadastur: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
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
    //Também é responsável por levar o usuário para págin de login se o cadastro for válido

    submitForm( form ) {
        this.senhaIgual = form.value.passwordConfirm == form.value.password
        let array = JSON.stringify(form.value);
        if ( this.senhaIgual == true ) {
            console.log(array);
            console.log(form);
            console.log(form.value);
            return this.registrarUsuario( form );
        }
        else {
            return this.presentToast();
        }
    }

    //Função de registro para usuários no banco de dados (integração)

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

