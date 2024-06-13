let userScore = 0;
let compScore = 0;

const moves = document.querySelectorAll(".move");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
  //rock paper scissors
};

const draw = () => {
  console.log("Draw");
  msg.innerText = "Draw";
  msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, moveId, compMove) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win, your ${moveId} beats ${compMove}`;
    msg.style.backgroundColor = "greenyellow";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose, computer uses ${compMove} to beat your ${moveId}`;
    msg.style.backgroundColor = "rgb(226, 136, 91)";
  }
};

const playGame = (moveId) => {
  //Generate computer move
  const compMove = compChoice();

  if (moveId === compMove) {
    draw();
  } else {
    let userWin = true;
    if (moveId === "rock") {
      //scissor or paper
      userWin = compMove === "paper" ? false : true;
    } else if (moveId === "paper") {
      //rock, scissors
      userWin = compMove === "scissors" ? false : true;
    } else {
      //rock or paper
      userWin = compMove === "rock" ? false : true;
    }
    showWinner(userWin, moveId, compMove);
  }
};

moves.forEach((move) => {
  move.addEventListener("click", () => {
    const moveId = move.getAttribute("id");
    playGame(moveId);
  });
});

//Follow modular way of functioning
