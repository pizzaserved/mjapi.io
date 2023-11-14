import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../shared/modal.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  // @Input() show:boolean;
  // @ViewChild('modal') modal: HTMLElement;
  status: string = '';
  message: string = ''

  constructor(public modalService: ModalService){
  }

  ngOnInit(): void {
    this.modalService.modalStatus.subscribe(newStatus => {
      this.status = newStatus;
    });
    this.modalService.modalMessage.subscribe(newMessage => {
      this.message = newMessage;
    })
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  @HostListener('window:keydown.escape', ['$event'])
  onEscapeKeyDown(event: KeyboardEvent): void {
    this.closeModal();
  }

}
