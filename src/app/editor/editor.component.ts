import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.pug',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public isSidebarCollapsed = true;
  public excelFile: File | null = null;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    bsCustomFileInput.init();
  }

  onExcelFileOpen(excelFileOpenTemplate): void {
    this.modalService.open(excelFileOpenTemplate, { size: 'lg' })
    .result
    .then(result => {
      if (!result) {
        return;
      }
    });
  }
}
