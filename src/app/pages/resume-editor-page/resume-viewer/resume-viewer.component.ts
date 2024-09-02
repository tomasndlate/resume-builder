import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { IResume } from 'src/app/models/IResume.interface';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.js');;


@Component({
  selector: 'app-resume-viewer',
  templateUrl: './resume-viewer.component.html',
  styleUrls: ['./resume-viewer.component.css']
})
export class ResumeViewerComponent {
  @Input() resume!: IResume;
  @ViewChild('pdfCanvas', { static: false }) pdfCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef<HTMLElement>;
  private pdf: pdfjs.PDFDocumentProxy | null = null;
  private page: pdfjs.PDFPageProxy | null = null;

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
      this.pdf = await pdfjs.getDocument(url).promise;
      this.page = await this.pdf.getPage(1);
      this.updateCanvas();
    });
  }

  updateCanvas() {
    if (!this.page) return;

    const containerWidth = this.canvasContainer.nativeElement.clientWidth;
    const containerHeight = this.canvasContainer.nativeElement.clientHeight;

    const viewport = this.page.getViewport({ scale: 1});

    const scale = Math.min(containerWidth / viewport.width, containerHeight / viewport.height);
    const scaledViewport = this.page.getViewport({ scale })

    const canvas = this.pdfCanvas.nativeElement;
    const context = canvas.getContext('2d');

    canvas.height = scaledViewport.height;
    canvas.width = scaledViewport.width;

    const renderContext: { canvasContext: CanvasRenderingContext2D; viewport: pdfjs.PageViewport; } = {
      canvasContext: context!,
      viewport: scaledViewport
    };

    this.page.render(renderContext);
  }

}
