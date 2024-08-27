import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employment } from '../../../../models/Resume.model';

@Component({
  selector: 'app-resume-employment-element',
  templateUrl: './resume-employment-element.component.html',
  styleUrls: ['./resume-employment-element.component.css', '../../resume-components-element.css']
})
export class ResumeEmploymentElementComponent {
  @Input() employmentElement: Employment = {
    jobTitle: '',
    employer: '',
    country: '',
    city: '',
    description: ''
  }
  @Output() employmentElementChange = new EventEmitter<string>();

  @Input() isElementOpen: boolean = false;
  @Output() elementOpenAction = new EventEmitter<string>();
  // @Input() elementIndex: number = -1;

  flipIsElementOpen() {
    this.isElementOpen = !this.isElementOpen;
    this.elementOpenAction.emit();
  }

  onInputBlur() {
    this.employmentElementChange.emit(JSON.stringify(this.employmentElement));
  }
}
