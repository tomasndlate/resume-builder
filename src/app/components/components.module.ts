import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { InputTextboxComponent } from './inputs/input-textbox/input-textbox.component';
import { ResumeWorkEduComponent } from './resume-components/resume-work-edu/resume-work-edu.component';
import { ResumeSkillComponent } from './resume-components/resume-skill/resume-skill.component';
import { ResumeLinkComponent } from './resume-components/resume-link/resume-link.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputTextboxComponent,
    ResumeWorkEduComponent,
    ResumeSkillComponent,
    ResumeLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputTextComponent,
    InputTextboxComponent,
    ResumeWorkEduComponent,
    ResumeSkillComponent,
    ResumeLinkComponent
  ]
})
export class ComponentsModule { }
