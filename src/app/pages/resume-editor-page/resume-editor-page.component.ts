import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmploymentsElement, IResume, IResumeSection } from '../../models/IResume.interface';
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

  updateResumeSection(sectionString: string) {
    const section: IResumeSection = JSON.parse(sectionString);
    this.resume = this.getUpdatedResumeWithSection(section);
    this.updateResume();
  }

  private getUpdatedResumeWithSection(section: IResumeSection) {
    const sectionKey: keyof IResume = section.sectionType
    switch (sectionKey) {
      case 'employment':
        return {...this.resume, employment: section};
      case 'education':
        return {...this.resume, education: section};
      case 'skills':
        return {...this.resume, skills: section};
      case 'websites':
        return {...this.resume, websites: section};
      case 'certifications':
        return {...this.resume, certifications: section};
      case 'volunteering':
        return {...this.resume, volunteering: section};
      default:
        return this.resume;
    }
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
