import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {
  @Input() resumeTag: string = '';
  @Output() deleteEvent = new EventEmitter<boolean>();
  @Output() cancelEvent = new EventEmitter<boolean>();

  emitDeleteEvent() {
    this.deleteEvent.emit(true);
  }

  emitCancelEvent() {
    this.cancelEvent.emit(true);
  }
}
