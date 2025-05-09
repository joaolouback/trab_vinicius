import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from './message.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-signal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './message-signal.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponentSignal {
  @Input() messageVarClasse: any;

  @Output() outputMessage = new EventEmitter<string>();

  onEdit() {
    this.outputMessage.emit("Texto retornado com Signal: venho de message para o app");
  }

  color = 'yellow';
}