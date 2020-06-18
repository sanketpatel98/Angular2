import { Component, EventEmitter } from '@angular/core'

@Component({
    selector: 'one',
    template: `{{pdata}}{{pdata1}}
                child to parent: <input type="text" #cdata (keyup)="onChange(cdata.value)">`,
    inputs: ['pdata','pdata1'],
    outputs: [`childEvent`]
})
export class one {
    public pdata;
    public pdata1;
    childEvent = new EventEmitter<string>();
    onChange(value:string)
    {
        this.childEvent.emit(value);
    }
 }
