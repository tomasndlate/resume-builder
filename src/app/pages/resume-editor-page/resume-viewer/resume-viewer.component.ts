import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { IResume } from 'src/app/models/IResume.interface';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;


@Component({
  selector: 'app-resume-viewer',
  templateUrl: './resume-viewer.component.html',
  styleUrls: ['./resume-viewer.component.css']
})
export class ResumeViewerComponent {
  @Input() resume!: IResume;
  @ViewChild('pdfCanvas', { static: false }) pdfCanvas!: ElementRef<HTMLCanvasElement>;
  private pdf: pdfjsLib.PDFDocumentProxy | null = null;
  private page: pdfjsLib.PDFPageProxy | null = null;

  private pdfDefinition = {
    content: [
      { text: 'This is a header', style: 'header' },
      'This is a standard paragraph.This is a standard paragraph.This is a standard paragraph.This is a standard paragraph.This is a standard paragraph.This is a standard paragraph.This is a standard paragraph.This is a standard paragraph.This is a standard paragraph.',
      { text: 'This is a bigger paragraph', fontSize: 15 },
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true
      }
    }
  };

  // ngOnInit() {
  //   if (this.resume)
  //     this.generatePdf();
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGE HAPPEN')
    if (changes['resume'])
      this.generatePdf();
  }

  generatePdf() {
    this.pdfDefinition.content.unshift({text: this.resume.tag, style: 'header'})
    pdfMake.createPdf(this.pdfDefinition).getBlob(async (blob) => {
      const url = URL.createObjectURL(blob);
      this.pdf = await pdfjsLib.getDocument(url).promise;
      this.page = await this.pdf.getPage(1);
      this.updateCanvas();
    });
  }

  updateCanvas() {
    if (!this.page) return;

    const viewport = this.page.getViewport({ scale: 1});
    const c = this.pdfCanvas.nativeElement;
    const context = c.getContext('2d');

    // High-DPI settings
    const devicePixelRatio = window.devicePixelRatio || 1;
    c.style.width = `100%`;
    c.style.height = `100%`;
    c.height = viewport.height * devicePixelRatio;
    c.width = viewport.width * devicePixelRatio;

    context!.scale(devicePixelRatio, devicePixelRatio)

    const renderContext: { canvasContext: CanvasRenderingContext2D; viewport: pdfjsLib.PageViewport; } = {
      canvasContext: context!,
      viewport: viewport
    };

    this.page.render(renderContext);
  }
}
