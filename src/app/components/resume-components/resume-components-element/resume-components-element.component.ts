import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IResumeSectionElement } from 'src/app/models/IResume.interface';
import { createSectionElement_Employments } from 'src/app/models/Resume.implement';

@Component({
  selector: 'app-resume-components-element',
  templateUrl: './resume-components-element.component.html',
  styleUrls: ['./resume-components-element.component.css', '../resume-components-element.css']
})
export class ResumeComponentsElementComponent {
  @Input() componentElement: IResumeSectionElement = createSectionElement_Employments();
  @Output() componentElementChange = new EventEmitter<string>();
  @Output() componentElementDeleted = new EventEmitter<string>();

  @Input() isElementOpen: boolean = false;
  @Output() elementOpenAction = new EventEmitter<string>();

  deleteComponentElement() {
    this.componentElementDeleted.emit();
  }

  flipIsElementOpen() {
    this.isElementOpen = !this.isElementOpen;
    this.elementOpenAction.emit();
  }

  onInputBlur() {
    this.componentElementChange.emit(JSON.stringify(this.componentElement));
  }

  get componentElementKeys() {
    return Object.keys(this.componentElement);
  }
}
