import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IResume, IResumeSection } from 'src/app/models/IResume.interface';

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
  // private page: pdfjs.PDFPageProxy | null = null;
  maxPage = 1;
  currentPage = 1;

  @Output() closeViewer = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['resume'])
      this.generatePdf();
  }

  get isInMaxPage() {
    return this.currentPage === this.maxPage;
  }

  get isInMinPage() {
    return this.currentPage === 1;
  }

  get pdfDefinition() {
    const content: any[] = [];
    const styles = {
      sectionTitle: { fontSize: 18, bold: true },
      sectionElementTitle: { fontSize: 14, bold: true },
      sectionElementText: { fontSize: 12 }
    };

    // Personal Details
    content.push({text: this.resume.personalDetails.title.default, style: 'sectionTitle'});
    Object.entries(this.resume.personalDetails.element).forEach(([key, value]) => {
      content.push({text: value.value, style: 'sectionElementText' })
    })

    // Summary
    content.push({text: this.resume.summary.title.default, style: 'sectionTitle'});
    content.push({text: this.resume.summary.element.value, style: 'sectionElementText'});

    // Employment
    content.push(this.convertToPdfContent(this.resume.employment));

    // Education
    content.push(this.convertToPdfContent(this.resume.education));

    // Skills
    content.push(this.convertToPdfContent(this.resume.skills));

    // Websites
    content.push(this.convertToPdfContent(this.resume.websites));

    // Certifications
    content.push(this.convertToPdfContent(this.resume.certifications));

    // Volunteering
    content.push(this.convertToPdfContent(this.resume.volunteering));


    const pdfDefinition = { content: content, styles: styles };
    return pdfDefinition;
  }

  nextPage() {
    if (!this.isInMaxPage) {
      this.currentPage++;
      this.updateCanvas();
    }
  }

  previousPage() {
    if (!this.isInMinPage) {
      this.currentPage--;
      this.updateCanvas();
    }
  }

  convertToPdfContent(section: IResumeSection): Object[] {
    const result = []

    if (section.elements.length > 0)
      result.push({text: section.title.default, style: 'sectionTitle'});

    section.elements.forEach( sectionElement => {
      // create title
      const sectionElementTitle = sectionElement.elementTitleKeys
        .map(titleKey => sectionElement.elementFields[titleKey].value)
        .filter(fieldValue => !!fieldValue)
        .join(sectionElement.elementTitleConnector);

      result.push({text: sectionElementTitle, style: 'sectionElementTitle'});

      // add description if existent
      if(sectionElement.elementFields['description']) {
        result.push({text: sectionElement.elementFields['description'].value, style: 'sectionElementText'});
      }
    });

    return result;
  }

  generatePdf() {
    pdfMake.createPdf(this.pdfDefinition).getBlob(async (blob) => {
      const url = URL.createObjectURL(blob);
      this.pdf = await pdfjs.getDocument(url).promise;
      // this.pdf.getPa
      this.maxPage = this.pdf.numPages;
      this.updateCanvas();
      // this.page = await this.pdf.getPage(1);
    });
  }

  updateCanvas() {
    if (!this.pdf) return;

    this.pdf.getPage(this.currentPage).then(page => {

      const containerWidth = this.canvasContainer.nativeElement.clientWidth;
      const containerHeight = this.canvasContainer.nativeElement.clientHeight;

      const viewport = page.getViewport({ scale: 1 });

      // bigger scale during render, scale down to render the page at end
      const scaleQuality = 3;

      const scale = Math.min(containerWidth / viewport.width, containerHeight / viewport.height) * scaleQuality;
      // const renderScale = scale * 2;
      const scaledViewport = page.getViewport({ scale })

      const canvas = this.pdfCanvas.nativeElement;
      const context = canvas.getContext('2d');

      canvas.height = scaledViewport.height;
      canvas.width = scaledViewport.width;

      const renderContext: { canvasContext: CanvasRenderingContext2D; viewport: pdfjs.PageViewport; } = {
        canvasContext: context!,
        viewport: scaledViewport
      };

      page.render(renderContext).promise.then(() => {
        context!.scale(1/scaleQuality, 1/scaleQuality)
      });
    })

  }

  downloadPDF() {
    pdfMake.createPdf(this.pdfDefinition).download(`${this.resume.tag}.pdf`);
  }

  emitCloseViewer() {
    this.closeViewer.emit();
  }

}
