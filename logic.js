let items = document.querySelectorAll(".board div");
let playerTurn = document.querySelector(".player-turn span");
let board = document.querySelector(".board");
let resetButton = document.querySelector(".reset");
let xWin = document.querySelector(".num-of-win .x");
let oWin = document.querySelector(".num-of-win .o");

let currentTurn = "x";

// Check Session Storage
if (sessionStorage.getItem("xWinner")) {
  xWin.innerHTML = sessionStorage.getItem("xWinner");
}
if (sessionStorage.getItem("oWinner")) {
  oWin.innerHTML = sessionStorage.getItem("oWinner");
}

items.forEach((ele, index) => { 
  ele.onclick = () => {
    if(ele.innerHTML === '') {
      ele.innerHTML = currentTurn;

      if(currentTurn === 'x') {
        playerTurn.innerHTML = currentTurn = 'o';
        
      }
      else if(currentTurn === 'o') {
        playerTurn.innerHTML = currentTurn = 'x';
      }
    }
    evaluateBoard(items);
    };
});


resetButton.onclick = () => {
  window.location.reload();
};

function evaluateBoard(items) {
  if (
    // Columns
    (items[0].innerHTML === "x" && items[1].innerHTML === "x" && items[2].innerHTML === "x") ||
    (items[0].innerHTML === "o" && items[1].innerHTML === "o" && items[2].innerHTML === "o") ||
    (items[3].innerHTML === "x" && items[4].innerHTML === "x" && items[5].innerHTML === "x") ||
    (items[3].innerHTML === "o" && items[4].innerHTML === "o" && items[5].innerHTML === "o") ||
    (items[6].innerHTML === "x" && items[7].innerHTML === "x" && items[8].innerHTML === "x") ||
    (items[6].innerHTML === "o" && items[7].innerHTML === "o" && items[8].innerHTML === "o") ||
    //Rows
    (items[0].innerHTML === "x" && items[3].innerHTML === "x" && items[6].innerHTML === "x") ||
    (items[0].innerHTML === "o" && items[3].innerHTML === "o" && items[6].innerHTML === "o") ||
    (items[1].innerHTML === "x" && items[4].innerHTML === "x" && items[7].innerHTML === "x") ||
    (items[1].innerHTML === "o" && items[4].innerHTML === "o" && items[7].innerHTML === "o") ||
    (items[2].innerHTML === "x" && items[5].innerHTML === "x" && items[8].innerHTML === "x") ||
    (items[2].innerHTML === "o" && items[5].innerHTML === "o" && items[8].innerHTML === "o") ||
    // Diagonal
    (items[0].innerHTML === "x" && items[4].innerHTML === "x" && items[8].innerHTML === "x") ||
    (items[0].innerHTML === "o" && items[4].innerHTML === "o" && items[8].innerHTML === "o") ||
    (items[2].innerHTML === "x" && items[4].innerHTML === "x" && items[6].innerHTML === "x") ||
    (items[2].innerHTML === "o" && items[4].innerHTML === "o" && items[6].innerHTML === "o")
  ) {
    let winner = currentTurn === "o" ? "x" : "o";
    showResult(winner);
    return;
  }
  
  // Check For Draw..
  isDraw = true;
  items.forEach((ele) => {
    if(ele.innerHTML != 'x' && ele.innerHTML != 'o') {
      isDraw = false
    };
  });

  if (isDraw) {
    let winner = "Draw!!";
    showResult(winner);
  }
}


function showResult(winner) {
  board.style.display = "none";
  let resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = `" ${winner} " ${winner !== "Draw!!" ? "Is Win!!" : ""}`;
  resultDiv.style.cssText = `
  background-color: #FFC107;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  padding: 10px;
  height: calc(250px - 1px);
  margin: 15px 0;
  border-radius: 12px;
  `;
  storageValue(winner);
}

function storageValue(winner) {
  if (winner === "x") {
    xWin.innerHTML++;
    sessionStorage.setItem("xWinner", xWin.innerHTML);
  } else if(winner === "o") {
    oWin.innerHTML++;
    sessionStorage.setItem("oWinner", oWin.innerHTML);
  } else {
    xWin.innerHTML;
    sessionStorage.setItem("xWinner", xWin.innerHTML);
    oWin.innerHTML;
    sessionStorage.setItem("oWinner", oWin.innerHTML);
  }
}