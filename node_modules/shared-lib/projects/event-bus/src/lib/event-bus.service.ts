import { Injectable } from '@angular/core';
import {Subject, Observable, ReplaySubject, BehaviorSubject} from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface AppEvent<T = any> {
  type: string;
  payload?: T;
}

@Injectable({ providedIn: 'root' })
export class EventBusService {
  private events$ = new ReplaySubject<AppEvent>(1);
  private logsSubject = new BehaviorSubject<string[]>([]);
  emit<T>(event: AppEvent<T>): void {
    this.events$.next(event);
  }

  on<T>(type: string): Observable<T> {
    return this.events$.asObservable().pipe(
      filter(e => e.type === type),
      map(e => e.payload as T)
    );
  }

  addLog(entry: string) {
    console.log(entry);
    console.log('add Log')
    const current = this.logsSubject.value;
    this.logsSubject.next([entry, ...current]);
  }

  getLogsSnapshot(): string[] {
    return this.logsSubject.value;
  }

}
