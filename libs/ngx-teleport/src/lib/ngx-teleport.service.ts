import { Injectable, TemplateRef } from '@angular/core';
import { NgxTeleportOutlet } from './teleport-outlet.directive';

@Injectable({
  providedIn: 'root',
})
export class NgxPortalService {
  readonly teleportOutletRegistry = new Map<string, NgxTeleportOutlet>();
  private teleportScheduler = new Map<string, TemplateRef<any>>()

  constructor () { }

  registerOutlet(key: string, outlet: NgxTeleportOutlet) {
    this.teleportOutletRegistry.set(key, outlet);

    const portal = this.teleportScheduler.get(key);
    if (portal) {
      this.teleport(portal, key)
    }
  }

  teleport(templateRef: TemplateRef<any>, outletId: string, from: string = '') {
    if (this.teleportOutletRegistry.has(outletId)) {
      const portalOutlet = this.teleportOutletRegistry.get(outletId);

      if (portalOutlet) {
        if (portalOutlet.hasAttached()) {
          portalOutlet.detach();
        }


        const viewRef = portalOutlet.attach(templateRef);
        viewRef.rootNodes.forEach(node => {
          return node.setAttribute('data-teleported-to', outletId);
          return node.setAttribute('data-teleported-from', from);
        });
      }
    } else {
      this.teleportScheduler.set(outletId, templateRef);
    }
  }

  unregisterOutlet(key: string) {
    const portalOutlet = this.teleportOutletRegistry.get(key);
    portalOutlet?.detach();
    this.teleportOutletRegistry.delete(key);
  }
}
