import { NgModule } from '@angular/core';
import { NgbNavModule, NgbCollapseModule, NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [
  NgbCollapseModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbModalModule
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
