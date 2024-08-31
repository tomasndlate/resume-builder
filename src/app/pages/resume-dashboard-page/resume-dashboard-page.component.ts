import { Component } from '@angular/core';
import { IResume, IResumeDraft } from 'src/app/models/IResume.interface';
import { createIResumeDraft } from 'src/app/models/Resume.implement';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume-dashboard-page',
  templateUrl: './resume-dashboard-page.component.html',
  styleUrls: ['./resume-dashboard-page.component.css']
})
export class ResumeDashboardPageComponent {

  resumes: IResume[] = [];
  isDeletePopupOpen: boolean = false;
  indexResumeToDelete!: number;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.getResumes();
  }

  getResumes() {
    this.resumeService.resumes$.subscribe({
      next: resumes => {
        this.resumes = resumes;
      },
      error: err => console.error(`An error occurred :${err}`)
    })
  }

  addResume() {
    const newResume: IResumeDraft = createIResumeDraft('tomasNEW')
    this.resumeService.addResume(newResume);
  }

  deleteResume(index: number) {
    this.indexResumeToDelete = index;
    this.isDeletePopupOpen = true;
  }

  confirmResumeDelete() {
    const id = this.resumes[this.indexResumeToDelete].id
    this.resumeService.removeResume(id);
    this.isDeletePopupOpen = false;
  }

  cancelResumeDelete() {
    this.isDeletePopupOpen = false;
  }

}
