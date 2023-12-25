import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular';

  // Declare variable
  public number1: number = 1
  public number2: number = 2;
  public operator: string = '+';
  public result: number = 3;

  public newItem: string = '';
  public items: any[] = [];

  public softArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Function caculator
  calculate(number1: number, number2: number, operator: string) {
    let result: number;
    switch (operator) {
      case '+':
        this.result = number1 + number2;
        break;
      case '-':
        this.result = number1 - number2;
        break;
      case '*':
        this.result = number1 * number2;
        break;
      case '/':
        number2 != 0 ? this.result = number1 / number2 : this.result = NaN;
        break;
      default:
        break;
    }
    
  }

  // Function add item
  public addItem(newItem: string) {
    this.items.push(newItem);
    this.newItem = '';
  }
}
