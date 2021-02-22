import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private menuType = new Subject<string>();
  private order = new Subject<any>();

  constructor() { }

  getMessage(): Observable<string> {
    return this.menuType.asObservable();
  }

  updateMessage(value: string): void {
    this.menuType.next(value);
  }

  getOrder(): Observable<any> {
    return this.order.asObservable();
  }

  setOrder(order: any): void {
    this.order.next(order);
  }
}
