import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesenvJogoComponent } from './desenv-jogo/desenv-jogo.component';

@NgModule({
  declarations: [
    AppComponent,
    DesenvJogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
