import { Component } from '@angular/core';
import { FormComponent, FormField } from "../../components/form/form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrigido o nome para styleUrls
})
export class LoginComponent {
  // Defina os campos do formulário
  loginFields: FormField[] = [
    {
      label: 'E-mail',      // Primeiro campo: Nome
      type: 'text',       // Tipo de input
      name: 'name',       // Nome do campo para identificar
      placeholder: 'Nome do humano'  // Placeholder
    },
    {
      label: 'Senha',    // Segundo campo: E-mail
      type: 'email',      // Tipo de input
      name: 'email',      // Nome do campo para identificar
      placeholder: 'meuhumano@pet.com'  // Placeholder
    }
  ];

  // Função para capturar o envio do formulário
  onLogin(formValues: any) {
    console.log('Form Values:', formValues);
    // Aqui vai sua lógica de login
  }
}