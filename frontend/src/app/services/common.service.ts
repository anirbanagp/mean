import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventData } from '../shared/models/event-data.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  /**
   * contain brodcast data
   */
  private globalEvent: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() { }

  /**
   * observer of global events
   *
   * @readonly
   * @type {Observable<any>}
   * @memberof CommonService
   */
  get globalEvents(): Observable<any> {
    return this.globalEvent.asObservable();
  }

  /**
   *emit a global event
   *
   * @param {EventData} eventData
   * @returns {void}
   * @memberof CommonService
   */
  public emitEventData(eventData: EventData) {
    return this.globalEvent.next(eventData);
  }

}
