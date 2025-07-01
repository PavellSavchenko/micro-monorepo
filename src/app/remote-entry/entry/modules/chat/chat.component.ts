import {Component, inject} from '@angular/core';
import {ChatService} from '../../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  message = '';
  chatService = inject(ChatService)
  messages$ = this.chatService.messages$;
  userName = "Remote 1 app"
  send() {
    if (!this.message.trim()) return;
    this.chatService.sendMessage({user: this.userName,message: this.message.trim()});
    this.message = '';
  }
}
