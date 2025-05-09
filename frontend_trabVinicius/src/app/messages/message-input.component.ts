import { FormsModule, NgForm } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { MessageService } from './message.services';
import { Message } from './message.model';  // Adicione esta importação

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  //providers: [MessageService]
  styles: `input.ng.invalid.ng-touched { border: 1px solid red; }`
})
export class MessageInputComponent {

  private messageService = inject(MessageService);  // Correção aqui

    onSubmit(form: NgForm) {
        console.log("MessageInputComponent: ");
        console.log(form);
        const messageAux = new Message(form.value.myContentForm,'Joao','','');
        this.messageService.addMessage(messageAux)
        form.resetForm();

    }
  onSave(TextoConsole: string) {  // 'string' com 's' minúsculo
    const messageAux = new Message(TextoConsole, 'Jp', '', '');  // Correção aqui
    this.messageService.addMessage(messageAux);
    console.log(TextoConsole);
  }
}
