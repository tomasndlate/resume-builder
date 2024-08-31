import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployments, IEmploymentsElement, IResumeSectionElement } from '../../../../models/IResume.interface';
import { createSectionElement_Employments } from 'src/app/models/Resume.implement';

@Component({
  selector: 'app-resume-employment-element',
  templateUrl: './resume-employment-element.component.html',
  styleUrls: ['./resume-employment-element.component.css', '../../resume-components-element.css']
})
export class ResumeEmploymentElementComponent {
  @Input() employmentElement: IResumeSectionElement = createSectionElement_Employments();
  @Output() employmentElementChange = new EventEmitter<string>();
  @Output() employmentElementDeleted = new EventEmitter<string>();

  @Input() isElementOpen: boolean = false;
  @Output() elementOpenAction = new EventEmitter<string>();

  deleteEmploymentsElement() {
    this.employmentElementDeleted.emit();
  }

  flipIsElementOpen() {
    this.isElementOpen = !this.isElementOpen;
    this.elementOpenAction.emit();
  }

  onInputBlur() {
    this.employmentElementChange.emit(JSON.stringify(this.employmentElement));
  }
}
