import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { One } from './one.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, One ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
