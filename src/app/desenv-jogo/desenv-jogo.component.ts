import { Component, OnInit } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-desenv-jogo',
  templateUrl: './desenv-jogo.component.html',
  styleUrls: ['./desenv-jogo.component.css']
})
export class DesenvJogoComponent {

  currentPlayer: string = 'X';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  // Cria o processo de jogo
  processPlay(line: number, col: number) {

    // Se não houver jogada no espaço e não houver campeão o jogo segue
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;

      // Verifica o vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      // Define o jogador atual
      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  checkWinner(player: string): boolean {
    //Checa a linha
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }
    //Checa a coluna
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }
    //Checa as diagonais
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true;
    }

    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true;
    }
    return false;
  }

  reset() {
    this.currentPlayer = 'X';
    this.winner = '';
    this.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  }

  constructor() { }

}
