import { Component, HostListener } from '@angular/core';
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
  isPdfViewerOpenCss = 'viewer-close';
  isPdfViewerOpen = false;
  isSmallScreen = false;
  isScrolled = false;

  constructor(
    private route: ActivatedRoute,
    private resumeService: ResumeService
  ) {}

  get showPdfViewer() {
    return (this.isPdfViewerOpen && this.isSmallScreen) || !this.isSmallScreen;
  }

  get showEditor() {
    return !this.showPdfViewer || !this.isSmallScreen;
  }

  ngOnInit() {
    this.setIsSmallScreen();
    this.getResumeByParam();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    // console.log(width);
    this.setIsSmallScreen();
    if (window.screen.width > 1200) {
      this.isPdfViewerOpen = false;
    }
  }

  setIsSmallScreen() {
    this.isSmallScreen = window.screen.width <= 1200;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.screenY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 100;
  }

  flipIsPdfViewerOpen() {
    this.isPdfViewerOpen = !this.isPdfViewerOpen;
  }

  updateResumeTag(tag: string) {
    this.resume = {...this.resume, tag: tag};
    this.updateResume();
  }

  updateResumePersonalDetails(personalDetailsString: string) {
    this.resume = {...this.resume, personalDetails: JSON.parse(personalDetailsString)};
    this.updateResume();
  }

  updateResumeSummary(summaryString: string) {
    this.resume = {...this.resume, summary: JSON.parse(summaryString)};
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
