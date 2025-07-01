import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { ChatService } from '../../../services/chat.service';
import { of } from 'rxjs';
import {MatCardActions, MatCardContent, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let chatServiceMock: Partial<ChatService>;

  beforeEach(async () => {
    chatServiceMock = {
      messages$: of([]),
      sendMessage: jasmine.createSpy('sendMessage'),
    };

    await TestBed.configureTestingModule({
      declarations: [ChatComponent],
      providers: [
        { provide: ChatService, useValue: chatServiceMock }
      ],
      imports: [MatCardModule, MatCardTitle, MatCardContent, MatCardActions, BrowserAnimationsModule, MatFormFieldModule,MatInputModule, FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send message if input is empty or whitespace', () => {
    component.message = '   ';
    component.send();
    expect(chatServiceMock.sendMessage).not.toHaveBeenCalled();
  });

  it('should send trimmed message and clear input', () => {
    component.message = ' Hello world ';
    component.send();
    expect(chatServiceMock.sendMessage).toHaveBeenCalledWith({
      user: component.userName,
      message: 'Hello world'
    });
    expect(component.message).toBe('');
  });
});
