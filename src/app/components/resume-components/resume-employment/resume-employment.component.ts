import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IResumeSection, IResumeSectionElement } from 'src/app/models/IResume.interface';
import { createSection_Employments, createSectionElement_Employments } from 'src/app/models/Resume.implement';

@Component({
  selector: 'app-resume-employment',
  templateUrl: './resume-employment.component.html',
  styleUrls: ['./resume-employment.component.css', '../resume-components.css']
})
export class ResumeEmploymentComponent {
  @Input() employment: IResumeSection = createSection_Employments()
  @Output() employmentChange = new EventEmitter<string>();

  indexElementOpen: number = -1;

  isDeletePopupOpen: boolean = false;
  indexToDelete: number = -1;

  addNewEmploymentElement() {
    const newEmploymentElement: IResumeSectionElement = createSectionElement_Employments();
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


  deleteEmploymentsElement(index: number) {
    this.indexToDelete = index;
    this.isDeletePopupOpen = true;
  }

  // POPUP METHODS
  confirmElementDelete() {
    this.employment.elements.splice(this.indexToDelete, 1);
    this.isDeletePopupOpen = false;
    this.emitEmploymentChange();
  }

  cancelElementDelete() {
    this.isDeletePopupOpen = false;
  }

  test() {
    console.log('test')
  }
}
