import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.pug',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public isSidebarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}