import { Component } from '@angular/core';
import { FormComponent, FormField } from '../../shared/components/form/form.component';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormComponent],  // Importe o FormComponent reutilizável
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent {
  constructor(private router: Router, private authService: AuthService){}
  // Defina os campos do formulário de cadastro
  signupFields: FormField[] = [
    {
      label: 'Nome (do humano)',
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

    this.authService.createUser(formValues.name, formValues.email, formValues.password).then(
      () => this.router.navigate(['/feed'], { state: { animate: 'slideRight' } })
    )
    // Aqui vai a lógica de cadastro
  }
}
