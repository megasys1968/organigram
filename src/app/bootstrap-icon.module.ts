import { ModuleWithProviders } from '@angular/core';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { Building, DoorOpen, FileEarmarkExcel, Pen, PersonCircle } from 'ngx-bootstrap-icons';

export class BootstrapIconModule {
  static forRoot(): ModuleWithProviders<NgxBootstrapIconsModule> {
    return NgxBootstrapIconsModule.pick({
      Building,
      DoorOpen,
      FileEarmarkExcel,
      Pen,
      PersonCircle
    });
  }
}
