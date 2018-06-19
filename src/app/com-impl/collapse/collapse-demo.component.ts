import { Component } from '@angular/core';

// webpack html imports


@Component({
  selector: 'collapse-demo',
  templateUrl: './collapse-demo.component.html'
})
export class CollapseDemoComponent {
  public isCollapsed:boolean = false;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }
}
