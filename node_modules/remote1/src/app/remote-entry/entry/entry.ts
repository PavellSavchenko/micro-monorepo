import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { EventBusService } from '@shared/event-bus';

@Component({
  selector: 'app-entry',
  standalone: false,
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class Entry implements OnInit{
  usersCount: number = 0;
constructor(private bus: EventBusService, private cdr: ChangeDetectorRef) {
}
ngOnInit() {
  this.bus.on<{ userCount: number }>('users:count')
    .subscribe((payload) => {
      this.usersCount = payload.userCount
    });
}
}
