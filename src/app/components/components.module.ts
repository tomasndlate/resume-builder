import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { ResumePersonalDetailsComponent } from './resume-components/resume-personal-details/resume-personal-details.component';
import { ResumeSummaryComponent } from './resume-components/resume-summary/resume-summary.component';
import { ResumeEmploymentComponent } from './resume-components/resume-employment/resume-employment.component';
import { ResumeEducationComponent } from './resume-components/resume-education/resume-education.component';
import { ResumeSkillsComponent } from './resume-components/resume-skills/resume-skills.component';
import { ResumeWebsitesComponent } from './resume-components/resume-websites/resume-websites.component';
import { ResumeCertificationsComponent } from './resume-components/resume-certifications/resume-certifications.component';
import { ResumeVolunteeringComponent } from './resume-components/resume-volunteering/resume-volunteering.component';
import { ResumeCustomSectionComponent } from './resume-components/resume-custom-section/resume-custom-section.component';
import { ResumeEmploymentElementComponent } from './resume-components/resume-employment/resume-employment-element/resume-employment-element.component';
import { ResumeCustomSectionElementComponent } from './resume-components/resume-custom-section/resume-custom-section-element/resume-custom-section-element.component';
import { ResumeVolunteeringElementComponent } from './resume-components/resume-volunteering/resume-volunteering-element/resume-volunteering-element.component';
import { ResumeCertificationsElementComponent } from './resume-components/resume-certifications/resume-certifications-element/resume-certifications-element.component';
import { ResumeWebsitesElementComponent } from './resume-components/resume-websites/resume-websites-element/resume-websites-element.component';
import { ResumeSkillsElementComponent } from './resume-components/resume-skills/resume-skills-element/resume-skills-element.component';
import { ResumeEducationElementComponent } from './resume-components/resume-education/resume-education-element/resume-education-element.component';
import { InputTextExpandableComponent } from './inputs/input-text-expandable/input-text-expandable.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DeletePopupComponent,
    ResumePersonalDetailsComponent,
    ResumeSummaryComponent,
    ResumeEmploymentComponent,
    ResumeEmploymentElementComponent,
    ResumeEducationComponent,
    ResumeEducationElementComponent,
    ResumeSkillsComponent,
    ResumeSkillsElementComponent,
    ResumeWebsitesComponent,
    ResumeWebsitesElementComponent,
    ResumeCertificationsComponent,
    ResumeCertificationsElementComponent,
    ResumeVolunteeringComponent,
    ResumeVolunteeringElementComponent,
    ResumeCustomSectionComponent,
    ResumeCustomSectionElementComponent,
    InputTextExpandableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DeletePopupComponent,
    ResumePersonalDetailsComponent,
    ResumeSummaryComponent,
    ResumeEmploymentComponent,
    ResumeEducationComponent,
    ResumeSkillsComponent,
    ResumeWebsitesComponent,
    ResumeCertificationsComponent,
    ResumeVolunteeringComponent,
    ResumeCustomSectionComponent,
    InputTextExpandableComponent,
  ]
})
export class ComponentsModule { }
