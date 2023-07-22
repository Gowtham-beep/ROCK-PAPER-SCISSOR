const computerdisplay = document.getElementById("computer-choice");
const userdisplay = document.getElementById("user-choice");
const resultdisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".button");

let userchoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userchoice = e.target.id;
    userdisplay.innerHTML = userchoice;
    generatecomputerchoice();
    generateresult();
  }))

function generatecomputerchoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  console.log(random);
  if (random === 1) {
    computerChoice = "Rock";
  }
  if (random === 2) {
    computerChoice = "Paper";
  }
  if (random === 3) {
    computerChoice = "Scissor";
  }
  computerdisplay.innerHTML = computerChoice;
}


function generateresult() {
  if (computerChoice === userchoice) {
    result = "Its a Draw!";
  }
  if (computerChoice === "Rock" && userchoice === "Scissor") {
    result = "You Lost!";
  }
  if (computerChoice === "Rock" && userchoice === "Paper") {
    result = "You Win!";
  }
  if (computerChoice === "Paper" && userchoice === "Scissor") {
    result = "You Win";
  }
  if (computerChoice === "Paper" && userchoice === "Rock") {
    result = "You Lost!";
  }
  if (computerChoice === "Scissor" && userchoice === "Rock") {
    result = "You Win!";
  }
  if (computerChoice === "Scissor" && userchoice === "Paper") {
    result = "You Lost!";
  }

  resultdisplay.innerHTML = result;
}
