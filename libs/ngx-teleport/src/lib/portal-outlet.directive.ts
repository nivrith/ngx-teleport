/* eslint-disable @angular-eslint/no-input-rename */
/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-inputs-metadata-property */
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { AfterViewInit, ComponentFactoryResolver, Directive, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { NgxPortalService } from './ngx-portal.service';

/**
 * NgxPortalOutlet. To dynamically teleport content declaratively
 * 
 * ```html
<!--This can be located anwhere in your App-->
<ngx-portal-outlet name="destination">
  <!--
  The projected content of the ngx-portal component will be rendered here (see below).
  -->
</ngx-portal-outlet>

<!--
  This can be located anwhere in your App
-->
<ngx-portal to="destination">

  <p>This projected content will be rendered wherever the
    <ngx-portal-outlet name="destination"> with name 'destination'
    is located.
  </p>
</ngx-portal>

 * ```
 */
@Directive({

  selector: 'ngx-portal-outlet',
  exportAs: 'ngxPortalOutlet',
  inputs: [ 'portal: ngxPortalOutlet' ],
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NgxPortalOutlet extends CdkPortalOutlet {
  @Input()
  name = '';

  constructor (
    componentFactoryResolver: ComponentFactoryResolver,
    viewContainerRef: ViewContainerRef,
    private portalService: NgxPortalService,
  ) {
    super(componentFactoryResolver, viewContainerRef);
  }

  ngAfterViewInit() {
    this.portalService.registerOutlet(this.name, this);
  }

  ngOnDestroy() {
    this.portalService.unregisterOutlet(this.name);
  }
}
