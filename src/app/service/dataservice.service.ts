import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
    
    private dataSubject = new BehaviorSubject<string>('Initial value');
    data$: Observable<string> = this.dataSubject.asObservable();

    constructor() { }
}
