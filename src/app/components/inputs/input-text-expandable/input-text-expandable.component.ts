import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-text-expandable',
  templateUrl: './input-text-expandable.component.html',
  styleUrls: ['./input-text-expandable.component.css']
})
export class InputTextExpandableComponent {

  @ViewChild('inputExpandable') inputExpandable!: ElementRef<HTMLInputElement>;

  @Input() inputValue: string = 'Untitled';
  @Input() inputEmptyDefaultValue: string = 'Untitled';

  @Output() inputValueChange = new EventEmitter<string>();

  // Letters a-zA-Z | Numbers 0-9 | Spaces \s | Zero or more apperances *
  private notMatchPattern = /[^a-zA-Z0-9\s]/g
  private multipleSpacesPattern = /\s+/g

  ngOnInit() {
    if (!this.inputValue) {
      this.inputValue = this.inputEmptyDefaultValue
    }
  }

  onInputBlur() {
    this.inputValue = this.inputValue.replace(this.notMatchPattern, '')
                      .replace(this.multipleSpacesPattern, ' ')
                      .trim();

    if (this.inputValue === '') {
      this.inputValue = this.inputEmptyDefaultValue;
    }
    this.inputValueChange.emit(this.inputValue);
  }

  focusOnInput() {
    this.inputExpandable.nativeElement.focus();
  }
}
