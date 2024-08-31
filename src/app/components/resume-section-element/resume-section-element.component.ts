import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IResume, IResumeSectionElement } from 'src/app/models/IResume.interface';

@Component({
  selector: 'app-resume-section-element',
  templateUrl: './resume-section-element.component.html',
  styleUrls: ['./resume-section-element.component.css', '../resume-components/resume-components-element.css']
})
export class ResumeSectionElementComponent {
  @Input() sectionElement!: IResumeSectionElement;
  @Output() sectionElementChange = new EventEmitter<string>();
  @Output() sectionElementDeleted = new EventEmitter<string>();

  @Input() isElementOpen: boolean = false;
  @Output() elementOpenAction = new EventEmitter<string>();

  deleteSectionElement() {
    this.sectionElementDeleted.emit();
  }

  flipIsElementOpen() {
    this.isElementOpen = !this.isElementOpen;
    this.elementOpenAction.emit();
  }

  onInputBlur() {
    this.sectionElementChange.emit(JSON.stringify(this.sectionElement));
  }

  get sectionElementFieldsKeys() {
    return Object.keys(this.sectionElement.elementFields);
  }

  get sectionElementTitle() {
    const title = this.sectionElement.elementTitleKeys
                  .map(key => this.sectionElement.elementFields[key].value)
                  .filter(fieldValue => !!fieldValue)
                  .join(` ${this.sectionElement.elementTitleConnector} `);
    return title ? title : "(Not specified)";
  }

  get sectionElementSubtitle() {
    const subtitle = this.sectionElement.elementSubTitleKeys
                  .map(key => this.sectionElement.elementFields[key].value)
                  .filter(fieldValue => !!fieldValue)
                  .join(` ${this.sectionElement.elementSubTitleConnector} `)
    return subtitle ? subtitle : "";
  }
}
