import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa o Router
import { FormComponent, FormField } from "../../components/form/form.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}  // Injeta o Router

  // Defina os campos do formulário
  loginFields: FormField[] = [
    {
      label: 'E-mail',
      type: 'text',
      name: 'email',
      placeholder: 'humano@email.com'
    },
    {
      label: 'Senha',
      type: 'password',
      name: 'password',
      placeholder: '*******'
    }
  ];

  // Função para capturar o envio do formulário
  onLogin(formValues: any) {
    console.log('Form Values:', formValues);
    // Aqui vai a lógica de login, mas por enquanto redireciona diretamente para o feed
    this.router.navigate(['/feed']);  // Redireciona para a página de feed
  }
}
