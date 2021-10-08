import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './components/portal.component';
import { PortalModule } from '@angular/cdk/portal';
import { NgxPortalOutlet as NgxPortalOutlet } from './portal-outlet.directive';

@NgModule({
  declarations: [ PortalComponent, NgxPortalOutlet ],
  imports: [ CommonModule, PortalModule ],
  exports: [ PortalComponent, NgxPortalOutlet ],
})
export class NgxTeleportModule { }
