import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  TemplateRef,
  ComponentFactoryResolver,
  AfterViewInit,
  ElementRef,
  SkipSelf,
} from '@angular/core';
import { NgxPortalService } from '../ngx-portal.service';

@Component({
  selector: 'ngx-portal',
  templateUrl: './portal.component.html',
  styleUrls: [ './portal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortalComponent {
  @Input() to: string | null = null;

  @ViewChild('portal') portalTemplateRef: TemplateRef<any> | null = null;

  private from = this.parentElementRef.nativeElement?.parentElement?.tagName.toLowerCase();

  constructor (
    private portalService: NgxPortalService,
    private parentElementRef: ElementRef<HTMLElement>,
    @SkipSelf() private componentRef: ComponentFactoryResolver,
  ) { }

  ngAfterViewInit() {
    if (this.to && this.portalTemplateRef) {
      this.portalService.teleport(this.portalTemplateRef, this.to, this.from);
    }
  }
}
