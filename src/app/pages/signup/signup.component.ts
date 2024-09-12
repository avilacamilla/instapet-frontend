import { Component } from '@angular/core';
import { FormComponent, FormField } from '../../components/form/form.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormComponent],  // Importe o FormComponent reutilizável
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Defina os campos do formulário de cadastro
  signupFields: FormField[] = [
    {
      label: 'Nome',
      type: 'text',
      name: 'name',
      placeholder: 'Digite seu nome'
    },
    {
      label: 'E-mail',
      type: 'email',
      name: 'email',
      placeholder: 'Digite seu e-mail'
    },
    {
      label: 'Senha',
      type: 'password',
      name: 'password',
      placeholder: 'Crie uma senha'
    }
  ];

  // Função para capturar o envio do formulário de cadastro
  onSignup(formValues: any) {
    console.log('Signup Form Values:', formValues);
    // Aqui vai a lógica de cadastro
  }
}
