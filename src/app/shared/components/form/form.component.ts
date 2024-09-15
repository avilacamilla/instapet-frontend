import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

export interface FormField {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() fields: FormField[] = [];  // Campos do formulário recebidos via Input
  @Input() buttonLabel: string = '';  // Texto do botão
  @Input() footerLink: string = '';   // Link do rodapé
  @Input() footerLinkText: string = ''; // Texto do link de rodapé
  @Input() title: string = ''; // Adicione um título opcional para o formulário

  @Output() submitForm = new EventEmitter<any>();

  onSubmit(formValues: any) {
    this.submitForm.emit(formValues);
  }
}
