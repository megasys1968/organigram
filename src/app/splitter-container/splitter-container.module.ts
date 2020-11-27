import { NgModule } from '@angular/core';
import {CdkScrollableModule} from '@angular/cdk/scrolling';
import { SplitterContainerComponent } from './splitter-container.component';
import { SecondaryPaneComponent } from './secondary-pane.componet';
import { PrimaryPaneComponent } from './primary-pane.component';
import { CommonModule } from '@angular/common';

const components = [
  SplitterContainerComponent,
  PrimaryPaneComponent,
  SecondaryPaneComponent
];

@NgModule({
  imports: [
    CommonModule,
    CdkScrollableModule
  ],
  exports: [
    ...components
  ],
  declarations: [
    ...components
  ]
})
export class SplitterContainerModule { }
