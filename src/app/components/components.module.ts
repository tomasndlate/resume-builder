import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ResumePersonalDetailsComponent } from './resume-components/resume-personal-details/resume-personal-details.component';
import { ResumeSummaryComponent } from './resume-components/resume-summary/resume-summary.component';
import { InputTextExpandableComponent } from './inputs/input-text-expandable/input-text-expandable.component';
import { FormsModule } from '@angular/forms';
import { ResumeSectionComponent } from './resume-components/resume-section/resume-section.component';
import { ResumeSectionElementComponent } from './resume-components/resume-section-element/resume-section-element.component';



@NgModule({
  declarations: [
    DeletePopupComponent,
    ResumePersonalDetailsComponent,
    ResumeSummaryComponent,
    InputTextExpandableComponent,
    ResumeSectionComponent,
    ResumeSectionElementComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DeletePopupComponent,
    ResumePersonalDetailsComponent,
    ResumeSummaryComponent,
    InputTextExpandableComponent,
    ResumeSectionComponent,
    ResumeSectionElementComponent,
  ]
})
export class ComponentsModule { }
