import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-hero',
  templateUrl: './hero.component.html',
  styleUrls: [ './hero.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  code = `
<!--This can be anwhere in your App-->
<ngx-teleport to="destination">
  <stuff>...</stuff>
</ngx-teleport>

<!--This can be anwhere in your App-->
<ngx-teleport-outlet name="destination">
</ngx-teleport-outlet>
<!--content will be rendered here-->
<stuff>...</stuff>
`
  constructor () { }

  ngOnInit(): void {
  }

}
