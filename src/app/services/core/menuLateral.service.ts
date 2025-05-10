import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuLateralService {
  private menuVisibleSubject = new BehaviorSubject<boolean>(true);
  menuVisible$ = this.menuVisibleSubject.asObservable();

  toggleMenu() {
    this.menuVisibleSubject.next(!this.menuVisibleSubject.value);
  }

  setMenuVisibility(value: boolean) {
    this.menuVisibleSubject.next(value);
  }
}