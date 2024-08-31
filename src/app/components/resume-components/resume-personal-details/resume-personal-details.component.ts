import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IPersonalDetails } from '../../../models/IResume.interface';
import { createIPersonalDetails } from 'src/app/models/Resume.implement';

@Component({
  selector: 'app-resume-personal-details',
  templateUrl: './resume-personal-details.component.html',
  styleUrls: ['../resume-section.css', '../resume-section-element.css']
})
export class ResumePersonalDetailsComponent {

  @Input() personalDetails: IPersonalDetails = createIPersonalDetails();
  @Output() personalDetailsChange = new EventEmitter<string>();

  onTitleChange(newTitle: string) {
    this.personalDetails.title.value = newTitle;
    this.emitPersonalDetailsChange();
  }

  onInputBlur() {
    this.emitPersonalDetailsChange();
  }

  emitPersonalDetailsChange() {
    this.personalDetailsChange.emit(JSON.stringify(this.personalDetails))
  }
}
