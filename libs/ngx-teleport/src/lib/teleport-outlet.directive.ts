/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-inputs-metadata-property */
import { AfterViewInit, Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxPortalService as NgxTeleportService } from './ngx-teleport.service';

/**
 * NgxPortalOutlet. To dynamically teleport content declaratively
 * 
 * ```html
<!--This can be located anwhere in your App-->
<ngx-teleport-outlet name="destination">
  <!--
  The projected content of the ngx-teleport component will be rendered here (see below).
  -->
</ngx-teleport-outlet>

<!--
  This can be located anwhere in your App
-->
<ngx-teleport to="destination">

  <p>This projected content will be rendered wherever the
    <ngx-teleport-outlet name="destination"> with name 'destination'
    is located.
  </p>
</ngx-teleport>

 * ```
 */
@Directive({

  selector: 'ngx-teleport-outlet',
  exportAs: 'ngxPortalOutlet',
  inputs: [ 'portal: ngxPortalOutlet' ],
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NgxTeleportOutlet implements AfterViewInit, OnDestroy {

  private attached: EmbeddedViewRef<any> | null = null

  @Input()
  name = '';

  constructor (
    private viewContainerRef: ViewContainerRef,
    private teleportService: NgxTeleportService,
  ) {
  }


  attach(templateRef: TemplateRef<any>) {
    this.detach();
    this.attached = this.viewContainerRef.createEmbeddedView(templateRef);
    return this.attached;
  }

  hasAttached() {
    return !!this.attached;
  }

  detach() {
    this.attached?.destroy();
  }

  ngAfterViewInit() {
    this.teleportService.registerOutlet(this.name, this);
  }

  ngOnDestroy() {
    this.teleportService.unregisterOutlet(this.name);
  }
}
