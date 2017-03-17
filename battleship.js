var board = [
  ['o', ' ', 'o', 'o', ' '],
  ['o', ' ', ' ', ' ', ' '],
  ['o', ' ', 'o', 'o', 'o'],
  ['o', ' ', ' ', ' ', ' '],
  [' ', ' ', 'o', ' ', 'o'],
  [' ', ' ', 'o', ' ', 'o']
];

function battleship() {
     function fire(row, col) {
       if (board[row][col] === 'o') {
         board[row][col] = 'x';
         return 'Hit!';
       } else {
         return 'Miss';
       }
     }
     return {
          shoot : fire,
     };
}
console.log(board);
var ship = battleship();
ship.shoot(0, 1);
ship.shoot(0, 2);
ship.shoot(0, 3);
ship.shoot(0, 4);
ship.shoot(0, 5);
console.log(board);
