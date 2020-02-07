import { Component, OnInit } from '@angular/core';
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

    constructor(public formbuilder: FormBuilder, private storage: Storage, public router: Router) {

        //Código responsável pelo registro dos campos do formulário.

        this.registerForm = this.formbuilder.group({
            name: [null, [Validators.required, Validators.minLength(3)]],
            lastName: [null, [Validators.required, Validators.minLength(3)]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
            passwordConfirm: [null, [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit() {
    }

    //Função repsonsável pelo envio do formulário e no comentário uma função que envia e pega o nome(nesse caso) no storage.

    submitForm(form) {
        this.senhaIgual = form.value.passwordConfirm == form.value.password
        let array = JSON.stringify(form.value);
        if (this.senhaIgual == true) {
            console.log(array);
            console.log(form);
            console.log(form.value);
        //  this.storage.set('name', this.registerForm.value.name).then(
        //     (valor) => {
        //          console.log(valor);
        //            this.get();
        //     }
        // );
        }
        else {
            return;
        }
    }

    // Função que pega o nome no storage.

    // get() {
    //     this.storage.get('name');
    // }

    //Função responsável por levar o usuário para pag de login após o cadastro
    navigateToLogin() {
        this.router.navigate(['../login'])
    }
}
