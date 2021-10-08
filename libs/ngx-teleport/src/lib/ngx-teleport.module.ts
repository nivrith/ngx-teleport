import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeleportComponent } from './components/teleport.component';
import { NgxTeleportOutlet as NgxTeleportOutlet } from './teleport-outlet.directive';

@NgModule({
  declarations: [ TeleportComponent, NgxTeleportOutlet ],
  imports: [ CommonModule ],
  exports: [ TeleportComponent, NgxTeleportOutlet ],
})
export class NgxTeleportModule { }
