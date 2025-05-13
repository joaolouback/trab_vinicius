import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, input, Output } from '@angular/core';
import { Message } from './message.model';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.services';

@Component({
  selector: 'app-message-signal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message-signal.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponentSignal {
  messageVarClasse = input<Message>(new Message("","","",""));

  @Output() outputMessage = new EventEmitter<string>();

  constructor(private messageServiceObj: MessageService){ }

  onEdit() {
    this.outputMessage.emit("Texto retornado com Signal: venho de message para o app");
  }

  onDelete() {
    this.messageServiceObj.deleteMessage(this.messageVarClasse());
  }

  color = 'yellow';
}