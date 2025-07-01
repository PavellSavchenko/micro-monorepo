import {ChatMessage, ChatService} from './chat.service';
import { SocketFactory } from './socket-factory'; // 👈
import {TestBed} from '@angular/core/testing';

describe('ChatService', ()=>{
  let service: ChatService;
  let mockSocket: any;
  let capturedListeners: Record<string, Function> = {}


  beforeEach(()=>{
    mockSocket = {
      emit: jasmine.createSpy('emit'),
      on: (event: string, callback: Function) => {
        capturedListeners[event] = callback
      }
    }

    spyOn(SocketFactory, 'createSocket').and.returnValue(mockSocket);

    TestBed.configureTestingModule({})
    service = TestBed.inject(ChatService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  });

  it('should emit message to socket', () => {
    const testMessage: ChatMessage = {user: 'User', message: 'Test message'}
    service.sendMessage(testMessage)
    expect(mockSocket.emit).toHaveBeenCalledWith('message', testMessage)
  });

  it('should update messages$ when socket receives a message', (done)=>{
    const testMessage: ChatMessage = {user: 'User', message: 'Test message'}

    service.messages$.subscribe(messages => {
      if (messages.length){
        expect(messages).toEqual([testMessage])
        done()
      }
    })

    capturedListeners['message'](testMessage)
  })
})
