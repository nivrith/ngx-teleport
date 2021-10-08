import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeleportComponent } from './components/teleport.component';
import { PortalModule } from '@angular/cdk/portal';
import { NgxTeleportOutlet as NgxTeleportOutlet } from './teleport-outlet.directive';

@NgModule({
  declarations: [ TeleportComponent, NgxTeleportOutlet ],
  imports: [ CommonModule, PortalModule ],
  exports: [ TeleportComponent, NgxTeleportOutlet ],
})
export class NgxTeleportModule { }
