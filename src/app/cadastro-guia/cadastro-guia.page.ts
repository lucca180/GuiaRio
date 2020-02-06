import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-guia',
  templateUrl: './cadastro-guia.page.html',
  styleUrls: ['./cadastro-guia.page.scss'],
})
export class CadastroGuiaPage implements OnInit {

  registerForm = FormGroup;

  constructor(public formbuilder: FormBuilder) {
    
    this.registerForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [null, [Validators.required, Validators.minLength(6)]],
      CPF: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      telefone: [null,[Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      cadastur: [null,[Validators.required, Validators.minLength(14), Validators.maxLength(14)]]
    });

  }

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form.value);
  }

}
