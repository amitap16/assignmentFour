import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNums = [];
  evenNums = [];

  onGameStarted(num: number) {
    console.log("onGameStarted from app comp...");
    console.log(num);
    if (num % 2 === 0)
      this.evenNums.push(num);
    else
      this.oddNums.push(num);
  }
}
