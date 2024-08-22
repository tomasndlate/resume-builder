import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/resume-dashboard-page/resume-dashboard-page.module').then(module => module.ResumeDashboardPageModule)
  },
  {
    path: 'editor',
    loadChildren: () => import('./pages/resume-editor-page/resume-editor-page.module').then(module => module.ResumeEditorPageModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
