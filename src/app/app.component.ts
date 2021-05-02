import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games = [{ id: 99 }];

  onGameStarted(gameData: { id: number }) {
    console.log("onGameStarted from app comp...");
    this.games.push({
      id: gameData.id
    });
  }
}
