import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxPortalOutlet } from './portal-outlet.directive';

@Injectable({
  providedIn: 'root',
})
export class NgxPortalService {
  readonly portalOutletRegistry = new Map<string, NgxPortalOutlet>();
  private portalScheduler = new Map<string, TemplateRef<any>>()

  constructor (@Optional() private viewContainerRef: ViewContainerRef) { }

  registerOutlet(key: string, outlet: NgxPortalOutlet) {
    this.portalOutletRegistry.set(key, outlet);

    const portal = this.portalScheduler.get(key);
    if (portal) {
      this.teleport(portal, key)
    }
  }

  teleport(templateRef: TemplateRef<any>, outletId: string, from: string = '') {
    if (this.portalOutletRegistry.has(outletId)) {
      const portalOutlet = this.portalOutletRegistry.get(outletId);

      if (portalOutlet) {
        if (portalOutlet.hasAttached()) {
          portalOutlet.detach();
        }
        const portal = new TemplatePortal(templateRef, this.viewContainerRef);

        const viewRef = portalOutlet.attach(portal);
        viewRef.rootNodes.forEach(node => {
          return node.setAttribute('data-teleported-to', outletId);
          return node.setAttribute('data-teleported-from', from);
        });
      }
    } else {
      this.portalScheduler.set(outletId, templateRef);
    }
  }

  unregisterOutlet(key: string) {
    this.portalOutletRegistry.delete(key);
  }
}
