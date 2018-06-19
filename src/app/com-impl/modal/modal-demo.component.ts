import { Component, ViewChild } from '@angular/core';

// todo: change to ng2-bootstrap
import { ModalDirective } from '../../com/modal/modal.component';


@Component({
  selector: 'modal-demo',
  templateUrl: './modal-demo.component.html'
})
export class ModalDemoComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
