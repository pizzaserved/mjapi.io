import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private dialogRef!: MatDialogRef<ModalComponent>;
  private renderer: Renderer2;
  private overlayRef!: OverlayRef;

  modalStatus: BehaviorSubject<string> = new BehaviorSubject<string>('');
  modalMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private dialog: MatDialog, private rendererFactory: RendererFactory2, private overlay: Overlay) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  openModal({status, message}:{status: string, message:string}): void {
    const overlayConfig: OverlayConfig = {
      // ... other overlay configuration
      scrollStrategy: this.overlay.scrollStrategies.block(),
    };
    this.overlayRef = this.overlay.create(overlayConfig);
    const portal = new ComponentPortal(ModalComponent);
    this.overlayRef.attach(portal);
    // this.renderer.addClass(document.body, 'no-scroll')
    this.modalStatus.next(status);
    this.modalMessage.next(message);
    // this.dialogRef = this.dialog.open(ModalComponent);
  }
  closeModal(): void {
    // this.renderer.removeClass(document.body, 'no-scroll')
    if(this.dialogRef){
      this.dialogRef.close();
    }
    if(this.overlayRef){

      this.overlayRef.detach();
      this.overlayRef = null!;
    }
  }
  isDialogOpen(): boolean {
    // return !!this.dialogRef;
    return !!this.overlayRef;
  }

}
