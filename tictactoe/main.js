let win = false;
let cpu = true;
let player = "";
let enemy = "";
let boxNum = 0;
let tie = false;

let currTurn;

let editBoard = false;

let unselected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let taken = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let winLines = [
  [
    [1, 2],
    [4, 8],
    [3, 6]
  ],
  [
    [0, 2],
    [4, 7]
  ],
  [
    [0, 1],
    [4, 6],
    [5, 8]
  ],
  [
    [4, 5],
    [0, 6]
  ],
  [
    [3, 5],
    [0, 8],
    [2, 6],
    [1, 7]
  ],
  [
    [3, 4],
    [2, 8]
  ],
  [
    [7, 8],
    [2, 4],
    [0, 3]
  ],
  [
    [6, 8],
    [1, 4]
  ],
  [
    [6, 7],
    [0, 4],
    [2, 5]
  ]
];

document.addEventListener("DOMContentLoaded", function () {
  const playerX = document.getElementById("option-x");
  const playerO = document.getElementById("option-o");
  //const human = document.getElementById("human");
  // const computer = document.getElementById("cpu");

  unselected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  taken = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  playerX.addEventListener("click", function () {
    player = "X";
    enemy = "O";
    console.log(player, enemy);
    let elem = document.getElementById("symbol");
    elem.innerHTML = "You have chosen X";
    elem.style.fontSize = "medium";
    editBoard = true;
    let move = Math.floor(Math.random() * 10);
    console.log("Move to go first", move);
    if (move % 2 != 0) {
      currTurn = enemy;
      elem.innerHTML = "You have chosen X. You will move second";
      enemyMove();
    } else {
      currTurn = player;
      elem.innerHTML =
        "You have chosen X. You will move first. Make your move!";
    }
  });

  playerO.addEventListener("click", function () {
    player = "O";
    enemy = "X";
    console.log(player, enemy);
    let elem = document.getElementById("symbol");
    elem.innerHTML = "You have chosen O";
    elem.style.fontSize = "medium";
    editBoard = true;
    let move = Math.floor(Math.random() * 10);
    console.log("Move to go first", move);
    if (move % 2 != 0) {
      currTurn = enemy;
      elem.innerHTML = "You have chosen O. You will move second";
      enemyMove();
    } else {
      currTurn = player;
      elem.innerHTML =
        "You have chosen O. You will move first. Make your move!";
    }
  });

  for (var i = 1; i < 10; i++) {
    let id = "cell" + i.toString();
    document.getElementById(id).addEventListener("click", clickCell);
  }
});

function swapTurn() {
  if (currTurn === player) {
    currTurn = enemy;
  } else {
    currTurn = player;
  }
}

function enemyMove() {
  if (win) {
    editBoard = false;
    winHandler(player);
  } else {
    tie = checkTies();
    if (tie) {
      editBoard = false;
      tieHandler();
    } else if (currTurn === enemy) {
      let indx = returnRandomCell();
      if (indx != null) {
        let id = "cell" + indx.toString();
        let cellForEnem = document.getElementById(id);
        markTaken(indx, enemy);
        displaySymbol(cellForEnem, enemy, indx);
      }
    }
  }
}

function clickCell(clickedCellEvent) {
  if (editBoard && currTurn === player) {
    // cellEventis the argument for the function
    clickedCellEvent.preventDefault();
    const clickedCell = clickedCellEvent.target;
    const cellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));
    if (unselected.indexOf(cellIndex) != -1) {
      unselected.splice(unselected.indexOf(cellIndex), 1);
      markTaken(cellIndex, player);

      if (!win && clickedCell.innerHTML === "") {
        displaySymbol(clickedCell, player, cellIndex);
        enemyMove();
      }
    }
  }
}

function winHandler(playerWon) {
  if (playerWon === player) {
    document.getElementById("symbol").innerHTML =
      "You have beat the CPU! <br><br> Click restart game at the bottom of the page to play again";
  } else {
    document.getElementById("symbol").innerHTML =
      "You have lost to the CPU. <br> <br> Try again. Click restart game at the bottom of the page to play again";
  }
}

function tieHandler() {
  document.getElementById("symbol").innerHTML =
    "You have tied with the CPU. <br><br> Click restart game at the bottom of the page to play again";
}

function returnRandomCell() {
  if (editBoard) {
    let index = Math.floor(Math.random() * unselected.length);
    let value = unselected[index];
    unselected.splice(index, 1);
    return value;
  }
}

function markTaken(cellNum, player) {
  if (editBoard) {
    let sub = cellNum - 1;
    if (player === enemy) {
      taken[sub] = -1;
    } else {
      taken[sub] = 1;
    }
  }
}

function displaySymbol(element, symbol, num) {
  if (editBoard) {
    element.innerHTML = symbol;
    element.style.fontSize = "medium";
    if (symbol === player) {
      element.classList.add(".player-one");
    } else if (symbol === enemy) {
      element.classList.add(".player-two");
    }
    element.classList.add(".locked");

    win = checkWinner(num - 1);

    console.log("move", num, "taken", taken, unselected, "unselected");

    if (win === true) {
      editBoard = false;
      if (symbol === enemy) {
        winHandler(enemy);
      } else {
        winHandler(player);
      }
    } else {
      tie = checkTies();
      if (tie === true) {
        editBoard = false;
        tieHandler();
      }
      swapTurn();
    }
  }
}

function checkTies() {
  for (var i = 0; i < taken.length; i++) {
    if (taken[i] === 0) {
      return false;
    }
  }
  return true;
}

function checkWinner(lastMove) {
  if (editBoard) {
    let currMove = taken[lastMove];
    for (var i = 0; i < winLines[lastMove].length; i++) {
      let winLine = winLines[lastMove][i];
      var mark1 = taken[winLine[0]];
      var mark2 = taken[winLine[1]];
      if (currMove === mark1 && currMove === mark2) {
        return true;
      }
    }
    return false;
  }
}
