import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgxPortalService as NgxTeleportService } from '../ngx-teleport.service';

@Component({
  selector: 'ngx-teleport',
  templateUrl: './teleport.component.html',
  styleUrls: [ './teleport.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeleportComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() to: string | null = null;

  @ViewChild('portal') portalTemplateRef: TemplateRef<any> | null = null;

  private from = this.parentElementRef.nativeElement?.parentElement?.tagName.toLowerCase();

  constructor (
    private portalService: NgxTeleportService,
    private parentElementRef: ElementRef<HTMLElement>,
  ) { }


  ngOnChanges(changes: SimpleChanges) {
    if (!changes.to.isFirstChange() && changes.to && changes.to.currentValue !== changes.to.previousValue) {
      if (changes.to.currentValue && this.portalTemplateRef) {
        this.portalService.teleport(this.portalTemplateRef, changes.to.currentValue)
      }
    }
  }

  ngAfterViewInit() {
    if (this.to && this.portalTemplateRef) {
      this.portalService.teleport(this.portalTemplateRef, this.to, this.from);
    }
  }

  ngOnDestroy() {
    if (this.to) {
      this.portalService.detach(this.to)
    }
  }

}
