import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { TableComponent } from './tableComponent/table.component';
import { CardComponent } from './cardComponent/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
