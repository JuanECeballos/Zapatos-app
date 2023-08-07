import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardZapatosComponent } from './card-zapatos/card-zapatos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardZapatosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
