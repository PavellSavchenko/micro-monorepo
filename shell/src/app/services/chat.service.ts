import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';
import {SocketFactory} from './socket-factory';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  messages$ = this.messagesSubject.asObservable();

  constructor() {
    // this.socket = io('http://localhost:3000');
    this.socket = SocketFactory.createSocket();

    this.socket.on('message', (message: ChatMessage) => {
      const current = this.messagesSubject.value;
      this.messagesSubject.next([...current, message]);
    });
  }

  sendMessage(message: ChatMessage) {
    this.socket.emit('message', message);
  }
}

export interface ChatMessage {
  user: string;
  message: string
}
