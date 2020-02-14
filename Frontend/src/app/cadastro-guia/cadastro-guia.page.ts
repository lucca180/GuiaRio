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

    errorMessage: string;

    loading: boolean = false;

    senhaIgual = true;

    constructor(public formbuilder: FormBuilder, 
                private storage: Storage, 
                public router: Router, 
                public toast: ToastController,
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
            phone_number: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
            cadastur: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
        });

    }

    ngOnInit() {
    }

    //Função para o toast de confirmação de cadastro ou aviso de erro
    async presentToast() {
        if (this.errorMessage){
            const toast = await this.toast.create({
                message: "Cadastro invalido revise seus dados!",
                duration: 2000
            });
            toast.present();
            this.loading = false;
        }
        else {
            const toast = await this.toast.create({
                message: "Cadastro feito com sucesso!",
                duration: 2000
            });
            toast.present();
            this.loading = false;
        }
    }

    //Função repsonsável pelo envio do formulário e no comentário uma função que envia e pega o nome(nesse caso) no storage.
    //Também é responsável por levar o usuário para págin de login se o cadastro for válido

    submitForm( form ) {
        return this.registrarUsuario( form );     
    }

    //Função de registro para usuários no banco de dados (integração)

    registrarUsuario( form ) {
        if ( form.status == "VALID" ) {
            this.loading = true;
            this.authService.register( form.value ).subscribe(
                ( res ) => {
                    this.errorMessage = "";
                    this.router.navigate(['../login']);
                    this.presentToast();
                },
            e => {       
                this.loading = false;
                this.errorMessage = e.error.message;
                console.error(e);
                this.presentToast();
                }
            );    
        }
    }
}

