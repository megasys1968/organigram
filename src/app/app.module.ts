import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap.module';
import { BootstrapIconModule } from './bootstrap-icon.module';
import { EditorComponent } from './editor/editor.component';
import { SplitterContainerModule } from './splitter-container/splitter-container.module';
import { FormsModule } from '@angular/forms';
import { FileInputValueAccessorDirective } from './file-input-value-accessor.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    FileInputValueAccessorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BootstrapModule,
    BootstrapIconModule.forRoot(),
    SplitterContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
