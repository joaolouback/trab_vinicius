import { FormsModule } from "@angular/forms";

import { Component, OnInit } from "@angular/core";
import { MessageComponentSignal } from "./message-signal.component";
import { Message } from "./message.model";
import { MessageService } from "./message.services";

@Component({
    selector: "app-message-list",
    standalone: true,
    imports: [FormsModule, MessageComponentSignal],
    template: `
    <div class="col-md-8 col-md-offset-2">
        @for (msg of messages; track $index) {
            <app-message-signal 
                [messageVarClasse]="msg" 
                (outputMessage)="onOutputMessage($event)">
            </app-message-signal>
        } @empty {
            messages é uma lista vazia
        }
    </div>
`,
        providers: [MessageService]

})
export class MessageListComponent implements OnInit {
onOutputMessage($event: string) {
throw new Error('Method not implemented.');
}
    messages: Message[] = [
        new Message("messageId", "Texto da mensagem via input 1", "userId", "JoaoPedro"),
        new Message("messageId2", "Texto da mensagem via input 2", "userId2", "JoaoPedro2"),
        new Message("messageId3", "Texto da mensagem via input 3", "userId3", "JoaoPedro3"),
    ];
    constructor (private messageService: MessageService){ }
    
    ngOnInit(): void {
        this.messages = this.messageService.getMessage();    
    }
    
    //onOutputMessage(event: string) {
      //  alert(event);
    //}
}