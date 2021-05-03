import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  intervalRef = null;

  @Output() gameStarted = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.resetCounter();
    console.log("onStart...");
    this.intervalRef = setInterval(() => {
      this.counter++;
      console.log("callTimer...");
      this.gameStarted.emit(this.counter);
    }, 1000);
  }

  onStopGame() {
    this.resetCounter();
    console.log("onStop...");
    clearInterval(this.intervalRef);
  }

  resetCounter() {
    this.counter = 0;
  }
}
