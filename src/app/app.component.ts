import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  title: string = 'Tip Calculator';
  foodCost: number = 0;
  tipPercentage: number= 0;
  foodTotal: number = 0;

  calculate(){
    this.foodTotal = ( this.foodCost + (this.foodCost * this.tipPercentage)/ 100)
  }

}
