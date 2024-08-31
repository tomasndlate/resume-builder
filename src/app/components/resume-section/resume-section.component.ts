import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IResumeSection, IResumeSectionElement } from 'src/app/models/IResume.interface';
import { createSectionElement_Education, createSectionElement_Employments } from 'src/app/models/Resume.implement';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css', '../resume-components/resume-components.css']
})
export class ResumeSectionComponent {
  @Input() section!: IResumeSection;
  @Output() sectionChange = new EventEmitter<string>();

  indexElementOpen: number = -1;

  isDeletePopupOpen: boolean = false;
  indexToDelete: number = -1;

  addNewElement_ToSection() {
    let newSectionElement: IResumeSectionElement = this.newSectionElement();
    this.section.elements.push(newSectionElement);
    this.indexElementOpen = this.section.elements.length - 1;
    this.emitSectionChange();
  }

  private newSectionElement(): IResumeSectionElement {
    switch(this.section.sectionType) {
      case "employment":
        return createSectionElement_Employments();
      case "education":
        return createSectionElement_Education();
      default:
        return createSectionElement_Employments();
    }
  }

  updateSectionElement(index: number, element: string) {
    this.section.elements[index] = JSON.parse(element)
    this.emitSectionChange();
    console.log(`Section element ${index} updated!`);
  }

  updateIndexElementOpen(index: number) {
    this.indexElementOpen = index;
  }


  emitSectionChange() {
    this.sectionChange.emit(JSON.stringify(this.section));
  }


  deleteSectionElement(index: number) {
    this.indexToDelete = index;
    this.isDeletePopupOpen = true;
  }

  // POPUP METHODS
  confirmElementDelete() {
    this.section.elements.splice(this.indexToDelete, 1);
    this.isDeletePopupOpen = false;
    this.emitSectionChange();
  }

  cancelElementDelete() {
    this.isDeletePopupOpen = false;
  }
}
