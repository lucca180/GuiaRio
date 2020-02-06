import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cadastro-guia',
  templateUrl: './cadastro-guia.page.html',
  styleUrls: ['./cadastro-guia.page.scss'],
})
export class CadastroGuiaPage implements OnInit {

  registerForm: FormGroup;

  senhaIgual = true;

  constructor(public formbuilder: FormBuilder, private storage: Storage) {

    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [null, [Validators.required, Validators.minLength(6)]],
      CPF: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      telefone: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      cadastur: [null, [Validators.required, Validators.minLength(14), Validators.maxLength(14)]]
    });

  }

  ngOnInit() {
  }

  submitForm(form) {
    this.senhaIgual = form.value.passwordConfirm == form.value.password
    let array = JSON.stringify(form.value);
    if (this.senhaIgual == true) {
      console.log(array);
      console.log(form);
      console.log(form.value);
      this.storage.set('name', this.registerForm.value.name).then(
        (valor) => {
          console.log(valor);
          this.get();
        }
      );
    }
    else {
      return;
    }
  }

  get() {
    this.storage.get('name');
  }
}
  
