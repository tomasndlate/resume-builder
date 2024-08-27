import { Component } from '@angular/core';
import { Resume, ResumeDraft } from 'src/app/models/Resume.model';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-resume-dashboard-page',
  templateUrl: './resume-dashboard-page.component.html',
  styleUrls: ['./resume-dashboard-page.component.css']
})
export class ResumeDashboardPageComponent {

  resumes: Resume[] = [];
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
    const newResume: ResumeDraft = {
      tag: 'tomascv',
      personalDetails: { title: '', element: {
        jobTitle: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        city: ''
      } },
      summary: { title: '', element: '' },
      employment: { title: '', elements: [] },
      education: { title: '', elements: [] },
      skills: { title: '', elements: [] },
      websites: { title: '', elements: [] },
      certifications: { title: '', elements: [] },
      volunteering: { title: '', elements: [] },
      customSection: { title: '', elements: [] }
    }
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
