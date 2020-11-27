import { NgModule } from '@angular/core';
import { NgbNavModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [
  NgbCollapseModule,
  NgbDropdownModule,
  NgbNavModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class BootstrapModule { }
