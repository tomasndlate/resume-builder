import { Injectable } from '@angular/core';
import { IResume, IResumeDraft } from '../models/IResume.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private currentResumes: {[id: string]: IResume} = {};
  private resumeSubject = new BehaviorSubject<IResume[]>([]);
  resumes$: Observable<IResume[]> = this.resumeSubject.asObservable();

  constructor() {
    this.currentResumes = JSON.parse(localStorage.getItem('storedResumes') || '{}');
    this.updateResumeSubject();
  }

  addResume(resume: IResumeDraft): void {
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

  updateResume(resume: IResume): void {
    this.currentResumes[resume.id] = resume;
    this.updateResumeSubject();
  }

  updateResumeTag(id: number, tag: string): void {
    this.currentResumes[id].tag = tag;
    this.updateResumeSubject();
  }

  getResume_ById(id: number): IResume | null {
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
