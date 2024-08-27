import { Injectable } from '@angular/core';
import { Resume, ResumeDraft } from '../models/Resume.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private currentResumes: {[id: string]: Resume} = {};
  private resumeSubject = new BehaviorSubject<Resume[]>([]);
  resumes$: Observable<Resume[]> = this.resumeSubject.asObservable();

  constructor() {
    this.currentResumes = JSON.parse(localStorage.getItem('storedResumes') || '{}');
    this.updateResumeSubject();
  }

  addResume(resume: ResumeDraft): void {
    const resumeId = this.generateId();
    this.currentResumes[resumeId] = {
      ...resume,
      id: resumeId
    };
    this.updateResumeSubject();
  }

  removeResume(id: number): void {
    delete this.currentResumes[id];
    this.updateResumeSubject();
  }

  updateResume(resume: Resume): void {
    this.currentResumes[resume.id] = resume;
    this.updateResumeSubject();
  }

  updateResumeTag(id: number, tag: string): void {
    this.currentResumes[id].tag = tag;
    this.updateResumeSubject();
  }

  getResume_ById(id: number): Resume | null {
    return this.currentResumes[id] ? this.currentResumes[id] : null;
  }

  private updateResumeSubject(): void {
    localStorage.setItem('storedResumes', JSON.stringify(this.currentResumes))
    this.resumeSubject.next(Object.values(this.currentResumes));
  }

  private generateId(): number {
    let currentId = parseInt(localStorage.getItem('currentId') || '0');
    currentId += 1;
    localStorage.setItem('currentId', currentId.toString());
    return currentId;
  }
}
