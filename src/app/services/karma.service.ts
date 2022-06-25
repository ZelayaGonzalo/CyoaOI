import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KarmaService {

  private karma:BehaviorSubject<number>

  constructor() {
   this.karma = new BehaviorSubject(0)
  }

  getValue(): Observable<number> {
    return this.karma.asObservable();
  }
  addKarma(amount:number):void{
    this.karma.next(this.karma.value + amount)
  }
}
