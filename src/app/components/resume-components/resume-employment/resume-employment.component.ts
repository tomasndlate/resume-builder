import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employment } from 'src/app/models/Resume.model';

@Component({
  selector: 'app-resume-employment',
  templateUrl: './resume-employment.component.html',
  styleUrls: ['./resume-employment.component.css', '../resume-components.css']
})
export class ResumeEmploymentComponent {
  @Input() employment: {title: string; elements: Employment[]} = {
    title: '',
    elements: []
  }
  @Output() employmentChange = new EventEmitter<string>();

  indexElementOpen: number = -1;

  addNewEmploymentElement() {
    const newEmploymentElement: Employment = {
      jobTitle: '',
      employer: '',
      country: '',
      city: '',
      description: ''
    }
    this.employment.elements.push(newEmploymentElement);
    this.indexElementOpen = this.employment.elements.length - 1;
    this.emitEmploymentChange();
  }

  updateEmploymentElement(index: number, element: string) {
    this.employment.elements[index] = JSON.parse(element)
    this.emitEmploymentChange();
    console.log(`Employment element ${index} updated!`);
  }

  updateIndexElementOpen(index: number) {
    this.indexElementOpen = index;
  }

  emitEmploymentChange() {
    this.employmentChange.emit(JSON.stringify(this.employment));
  }

  test() {
    console.log('test')
  }
}
