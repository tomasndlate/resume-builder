import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeEditorPageComponent } from './resume-editor-page.component';
import { RouterModule } from '@angular/router';
import { ResumeEditorPageRoutes } from './resume-editor-page.routes';



@NgModule({
  declarations: [ResumeEditorPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ResumeEditorPageRoutes)
  ]
})
export class ResumeEditorPageModule { }
