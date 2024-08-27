import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PersonalDetails } from '../../../models/Resume.model';

@Component({
  selector: 'app-resume-personal-details',
  templateUrl: './resume-personal-details.component.html',
  styleUrls: ['./resume-personal-details.component.css', '../resume-components.css', '../resume-components-element.css']
})
export class ResumePersonalDetailsComponent {

  @Input() personalDetails: {title: string; element: PersonalDetails} = {
    title: '',
    element: {
      jobTitle: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: ''
    }
  };
  @Output() personalDetailsChange = new EventEmitter<string>();

  ngOnInit() {
    console.log(this.personalDetails)
  }

  onTitleChange(newTitle: string) {
    this.personalDetails.title = newTitle;
    this.emitPersonalDetailsChange();
  }

  onInputBlur() {
    this.emitPersonalDetailsChange();
  }

  emitPersonalDetailsChange() {
    this.personalDetailsChange.emit(JSON.stringify(this.personalDetails))
  }
}
