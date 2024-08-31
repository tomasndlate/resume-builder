import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponentsElementComponent } from './resume-components-element.component';

describe('ResumeComponentsElementComponent', () => {
  let component: ResumeComponentsElementComponent;
  let fixture: ComponentFixture<ResumeComponentsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeComponentsElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeComponentsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
