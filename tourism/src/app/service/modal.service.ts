import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubject = new Subject<boolean>();
  modalState$ = this.modalSubject.asObservable();

  open() {
    this.modalSubject.next(true);
  }

  close() {
    this.modalSubject.next(false);
  }
}
