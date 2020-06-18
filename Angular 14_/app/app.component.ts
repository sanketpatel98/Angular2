import { Component } from '@angular/core';
import { one } from './one.component'

@Component({
  selector: 'my-app',
  template: `
  
              <br>
              <hr>
              <br>
              <!--parent to child1:<input type="text" #ptext (keyup)="0">
              parent to child1:<input type="text" #ptext1 (keyup)="0"> 
              child to parent:{{cdata}}
              <one (childEvent)="cdata=$event" [pdata]="ptext.value" [pdata1]="ptext1.value"></one>-->`,
  directives: [ one ]

})
export class AppComponent { 
  public cdata;
}
