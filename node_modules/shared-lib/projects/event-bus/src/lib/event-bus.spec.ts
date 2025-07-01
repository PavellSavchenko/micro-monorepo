import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBus } from './event-bus.service';

describe('EventBus', () => {
  let component: EventBus;
  let fixture: ComponentFixture<EventBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
