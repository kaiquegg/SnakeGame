//Tela

var blockSize = 25;
var row = 20;
var col = 25;
var board;
var context;

//cabeça da cobra
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

//comida
var foodX = blockSize * 10;
var foodY = blockSize * 10;

//Preenchimento do tela
window.onload = function () {
  board = document.getElementById("board");
  board.height = blockSize * row;
  board.width = blockSize * col;
  context = board.getContext("2d"); // Usado para desenhar a tela

  placeFood();
  document.addEventListener("keyup", changeDirection);
  // update();
  setInterval(update, 1000 / 10); // A cada 100 milisegundos
};

function update() {
  context.fillStyle = "black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX == foodX && snakeY == foodY) {
    placeFood();
  }

  context.fillStyle = "lime";
  snakeX += velocityX * blockSize;
  snakeY += velocityY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
}

function changeDirection(e) {
  if (e.code == "ArrowUp" && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (e.code == "ArrowDown" && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  } else if (e.code == "ArrowLeft" && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (e.code == "ArrowRight" && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  }
}

function placeFood() {
  //  Math.random() = (0-1 * col) -> (0-20) e multiplica pelo bloco(25)
  foodX = Math.floor(Math.random() * col) * blockSize;
  foodY = Math.floor(Math.random() * row) * blockSize;
}
