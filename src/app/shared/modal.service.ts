import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private dialogRef!: MatDialogRef<ModalComponent>;

  modalStatus: BehaviorSubject<string> = new BehaviorSubject<string>('');
  modalMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private dialog: MatDialog) {}

  openModal({status, message}:{status: string, message:string}): void {
    this.modalStatus.next(status);
    this.modalMessage.next(message);
    this.dialogRef = this.dialog.open(ModalComponent);
  }
  closeModal(): void {
    if(this.dialogRef)
      this.dialogRef.close();
  }
  isDialogOpen(): boolean {
    return !!this.dialogRef;
  }

}
