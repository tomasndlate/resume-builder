import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeEditorPageComponent } from './resume-editor-page.component';
import { RouterModule } from '@angular/router';
import { ResumeEditorPageRoutes } from './resume-editor-page.routes';
import { ResumeViewerComponent } from './resume-viewer/resume-viewer.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResumeEditorPageComponent,
    ResumeViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ResumeEditorPageRoutes),
    ComponentsModule,
    FormsModule
  ]
})
export class ResumeEditorPageModule { }
