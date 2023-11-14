// Creación del tablero de sudoku
const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
  ];
  
  // Función para verificar si un número es válido en la posición dada
  function isValid(board, row, col, num) {
    // Verificar fila
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }
  
    // Verificar columna
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }
  
    // Verificar subcuadrícula
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Función para resolver el tablero de sudoku utilizando backtracking
  function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
  
              if (solveSudoku(board)) {
                return true;
              } else {
                board[row][col] = 0; // Deshacer el cambio si la solución no es válida
              }
            }
          }
  
          return false; // Si no se encuentra ninguna solución válida
        }
      }
    }
  
    return true; // Si se han llenado todas las celdas y no hay espacios vacíos
  }
  
  // Función para imprimir el tablero de sudoku en la consola
  function printBoard(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        process.stdout.write(board[row][col] + " ");
      }
      process.stdout.write("\n");
    }
  }
  
  // Resolver el tablero de sudoku
  solveSudoku(board);
  
  // Imprimir el tablero resuelto
  printBoard(board);