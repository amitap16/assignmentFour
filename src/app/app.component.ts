import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games = [];

  onGameStarted(id: number) {
    console.log("onGameStarted from app comp...");
    console.log(id);
    this.games.push(id);
  }
}
