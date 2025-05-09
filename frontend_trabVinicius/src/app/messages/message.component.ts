import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Message } from './message.model';
import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [MessageListComponent, MessageInputComponent],
  template: `
    <div class="row">
    <app-message-input></app-message-input>
    </div>
    <hr/>
    <div class="row">
      <app-message-list></app-message-list> 
    </div>
  `
})

export class MessageComponent {
   // @Input() messageVarClasse: Message = new Message("", "", "", "");

    //@Output() outputMessage = new EventEmitter<string>();
    //onEdit(){
        //alert('Táh funcionando...');
      //  this.outputMessage.emit("texto retornado");
    //};
// message = {
//    content: 'Tó ficando fera com varios componentes',
//    author: 'Joao'
 // };
};
  
  