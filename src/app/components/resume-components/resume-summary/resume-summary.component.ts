import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISummary } from 'src/app/models/IResume.interface';

@Component({
  selector: 'app-resume-summary',
  templateUrl: './resume-summary.component.html',
  styleUrls: ['../resume-section.css', '../resume-section-element.css']
})
export class ResumeSummaryComponent {
  @Input() summary!: ISummary;
  @Output() summaryChange = new EventEmitter<string>();

  onInputBlur() {
    this.emitPersonalDetailsChange();
  }

  emitPersonalDetailsChange() {
    this.summaryChange.emit(JSON.stringify(this.summary))
  }
}
