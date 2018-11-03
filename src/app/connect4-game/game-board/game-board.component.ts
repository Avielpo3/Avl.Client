import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  board: Coin[][] = [];

  private rowLength = 7;
  private columnLength = 6;

  currentPlayerCoin: Coin = Coin.PlayerOne;
  message: string = null;

  constructor() {


  }

  ngOnInit() {
    this.initalizeBoard();
  }

  /**
   * Initalize to blank board
   * @memberof GameBoardComponent
   */
  initalizeBoard(): void {
    for (let i = 0; i < this.rowLength; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columnLength; j++) {
        this.board[i][j] = Coin.Empty;
      }
    }
  }

  addCoin(col: number): void {
    console.log(col);

    const column = this.board[col];
    for (let row = 0; row < this.rowLength; row++) {
      const nextCell = column[row + 1];
      // found available cell - if in limits or next cell is taken and current cell available.
      if (nextCell === this.rowLength || (nextCell !== 0 && column[row] === 0)) {
        this.board[col][row] = this.currentPlayerCoin;
        if (this.isPlayerWon(col, row)) {
          this.message = 'Wonnnnn';
        } else {
          this.nextPlayer();
        }
        return;
      }
    }

    // did not found.
    this.message = 'try another move..';

  }

  /**
   * Set the next player turn
   * @private
   * @memberof GameBoardComponent
   */
  private nextPlayer(): void {
    this.currentPlayerCoin = this.currentPlayerCoin === Coin.PlayerOne ? Coin.PlayerTwo : Coin.PlayerOne;
  }

  /**
   * Check if player has 4 coins in a row.
   * @private
   * @param {number} col - Current column cell
   * @param {number} row - Current row cell
   * @returns {boolean} True if found, false otherwise.
   * @memberof GameBoardComponent
   */
  private isPlayerWon(col: number, row: number): boolean {
    let isWon = false;
    isWon = this.checkHorizontal(col, 0, false);
    isWon = this.checkHorizontal(0, row, true);
    return isWon;
  }

  private checkHorizontal(boardCol: number, boardRow: number, isHorizontal: boolean): boolean {
    let winnerCounter = 0;
    let currentPlayerCoin = Coin.Empty;
    let col = boardCol;
    let row = boardRow;

    while (row < this.columnLength && col < this.rowLength) {
      const currentCell = this.board[col][row];

      // if no player coin, reset counter and continue.
      if (currentCell === Coin.Empty) {
        winnerCounter = currentPlayerCoin = Coin.Empty;
        isHorizontal ? col++ : row++;
        continue;
      }

      // initalize for the first coin found.
      if (currentPlayerCoin === 0) {
        currentPlayerCoin = currentCell;
        winnerCounter++;
        isHorizontal ? col++ : row++;
        continue;
      }

      // Add for exisitng player, or switch player and reset counter for 1.
      if (currentPlayerCoin === currentCell) {
        winnerCounter++;
      } else {
        currentPlayerCoin = currentCell;
        winnerCounter = 1;
      }

      // check for wining
      if (winnerCounter === 4) {
        return true;
      }

      isHorizontal ? col++ : row++;
    }

    return false;
  }

}

enum Coin {
  Empty,
  PlayerOne,
  PlayerTwo
}
