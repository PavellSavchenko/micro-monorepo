import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { EventBusService } from '@shared/event-bus';

@Component({
  selector: 'app-entry',
  standalone: false,
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
  changeDetection: ChangeDetectionStrategy.Default

})

export class Entry implements OnInit{
  logs: string[] = [];

  constructor(private bus: EventBusService) {
  }

  ngOnInit() {
    console.log(this.bus.getLogsSnapshot())
    this.logs = this.bus.getLogsSnapshot()
  }
}
