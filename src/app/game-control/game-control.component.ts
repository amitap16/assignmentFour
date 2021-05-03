import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  counter: number = 0;
  intervalRef;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    console.log("onStart...");
    this.intervalRef = setInterval(() => {
      this.counter++;
      console.log("callTimer...");
      this.gameStarted.emit(this.counter);
    }, 1000);
  }

  onStopGame() {
    console.log("onStop...");
    clearInterval(this.intervalRef);
  }
}
