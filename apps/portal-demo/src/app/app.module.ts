import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxTeleportModule } from 'ngx-teleport';
import { FooterComponent } from './footer/footer.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [ AppComponent, FooterComponent, HeroComponent, ],
  imports: [ BrowserModule, NgxTeleportModule, HighlightModule, ClipboardModule ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),

        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [ AppComponent ],
  exports: [
    FooterComponent,
    HeroComponent
  ],
})
export class AppModule { }
