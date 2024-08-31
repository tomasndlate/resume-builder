import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IResumeSection, IResumeSectionElement } from 'src/app/models/IResume.interface';
import { createSectionElement_Certifications, createSectionElement_Education, createSectionElement_Employments, createSectionElement_Skills, createSectionElement_Volunteering, createSectionElement_Websites } from 'src/app/models/Resume.implement';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['../resume-section.css']
})
export class ResumeSectionComponent {
  @Input() section!: IResumeSection;
  @Output() sectionChange = new EventEmitter<string>();

  indexElementOpen: number = -1;

  isDeletePopupOpen: boolean = false;
  indexToDelete: number = -1;

  addNewElement_ToSection() {
    let newSectionElement: IResumeSectionElement | null = this.newSectionElement();
    if (newSectionElement) {
      this.section.elements.push(newSectionElement);
      this.indexElementOpen = this.section.elements.length - 1;
      this.emitSectionChange();
    }
  }

  private newSectionElement(): IResumeSectionElement | null {
    switch(this.section.sectionType) {
      case 'employment':
        return createSectionElement_Employments();
      case 'education':
        return createSectionElement_Education();
      case 'skills':
        return createSectionElement_Skills();
      case 'websites':
        return createSectionElement_Websites();
      case 'certifications':
        return createSectionElement_Certifications();
      case 'volunteering':
        return createSectionElement_Volunteering();
      default:
        return null;
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
