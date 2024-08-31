import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmploymentsElement, IResume } from '../../models/IResume.interface';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-editor-page',
  templateUrl: './resume-editor-page.component.html',
  styleUrls: ['./resume-editor-page.component.css']
})
export class ResumeEditorPageComponent {

  resume!: IResume;

  test_input: string = 'Untitled';

  constructor(
    private route: ActivatedRoute,
    private resumeService: ResumeService
  ) {}

  ngOnInit() {
    this.getResumeByParam();
  }

  testFunction(){
    console.log('Test function evoqued')
  }

  updateResumeTag(tag: string) {
    this.resume = {...this.resume, tag: tag};
    this.updateResume();
  }

  updateResumePersonalDetails(personalDetailsString: string) {
    this.resume = {...this.resume, personalDetails: JSON.parse(personalDetailsString)};
    this.updateResume();
  }

  updateResumeEmployment(employment: string) {
    this.resume = {...this.resume, employment: JSON.parse(employment)};
    this.updateResume();
  }

  updateResumeEducation(education: string) {
    this.resume = {...this.resume, education: JSON.parse(education)};
    this.updateResume();
  }

  private updateResume() {
    this.resumeService.updateResume(this.resume);
  }

  private getResumeByParam() {
    this.route.paramMap.subscribe({
      next: params => {
        const resumeIdString = params.get('id');
        if (resumeIdString) {
          const resume = this.resumeService.getResume_ById(parseInt(resumeIdString));
          if (resume)
            this.resume = resume;
        }
      },
      error: err => console.error(`An error occurred :${err}`)
    })
  }
}
