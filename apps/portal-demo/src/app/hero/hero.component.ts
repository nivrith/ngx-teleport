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
<ngx-portal to="destination">
  <stuff>...</stuff>
</ngx-portal>

<!--This can be anwhere in your App-->
<ngx-portal-outlet name="destination">
</ngx-portal-outlet>
<!--content will be rendered here-->
<stuff>...</stuff>
`
  constructor () { }

  ngOnInit(): void {
  }

}
