import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VegaLiteGraphComponent } from './components/vega-lite-graph/vega-lite-graph.component';
import { VegaGraphComponent } from './components/vega-graph/vega-graph.component';
import { HeaderComponent } from './commom/header/header.component';
import { FooterComponent } from './commom/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    VegaLiteGraphComponent,
    VegaGraphComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
