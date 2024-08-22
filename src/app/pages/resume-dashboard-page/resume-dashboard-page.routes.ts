import { Routes } from "@angular/router";
import { ResumeDashboardPageComponent } from "./resume-dashboard-page.component";

export const ResumeDashboardPageRoutes: Routes = [
  {
    path: '',
    component: ResumeDashboardPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
