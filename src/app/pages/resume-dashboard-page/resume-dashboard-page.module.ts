import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDashboardPageComponent } from './resume-dashboard-page.component';
import { RouterModule } from '@angular/router';
import { ResumeDashboardPageRoutes } from './resume-dashboard-page.routes';



@NgModule({
  declarations: [ResumeDashboardPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ResumeDashboardPageRoutes)
  ]
})
export class ResumeDashboardPageModule { }
