import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { NgxPortalService as NgxTeleportService } from '../ngx-teleport.service';

@Component({
  selector: 'ngx-teleport',
  templateUrl: './teleport.component.html',
  styleUrls: [ './teleport.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeleportComponent implements AfterViewInit {
  @Input() to: string | null = null;

  @ViewChild('portal') portalTemplateRef: TemplateRef<any> | null = null;

  private from = this.parentElementRef.nativeElement?.parentElement?.tagName.toLowerCase();

  constructor (
    private portalService: NgxTeleportService,
    private parentElementRef: ElementRef<HTMLElement>,
  ) { }

  ngAfterViewInit() {
    if (this.to && this.portalTemplateRef) {
      this.portalService.teleport(this.portalTemplateRef, this.to, this.from);
    }
  }
}
