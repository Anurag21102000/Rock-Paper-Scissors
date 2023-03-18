/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore={playerScore:0,ComputerScore:0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  return computerChoice
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
   let score;

  if (playerChoice === computerChoice) {
    score = 0

  
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1

  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1

  } else {
    score = -1
  }

  // return score
  return score
}

function showResult(score, playerChoice, computerChoice) {
  const show=document.getElementById('result')
  const hand=document.getElementById('hands')
  const playscore=document.getElementById('player-score')
  if(score==-1){
    show.innerText="You lose🥲"
  }
  else if(score==0)
  {
    show.innerText="It's a tie!"
  }
  else
    show.innerText="Yay!!, You Won!!😊"
  hand.innerText=`Player-${playerChoice} vs Computer-${computerChoice}`

  playscore.innerText=`💁‍♂️-${totalScore.playerScore} vs 🤖-${totalScore.ComputerScore}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const compchoice=getComputerChoice()
  console.log({playerChoice,compchoice})
  const score=getResult(playerChoice,compchoice)
  console.log(score)
  if(score==1){
totalScore['playerScore']+=score }
  else if(score==-1){
    totalScore['ComputerScore']+=1
  }
  showResult(score,playerChoice,compchoice)
  
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
const btns=document.querySelectorAll('.rpsButton')
  btns.forEach(button=>{
    button.onclick=()=>onClickRPS(button.value)
  })
 const endgame=document.getElementById('endGameButton')
  endgame.onclick=()=>endGame()

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
   let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  totalScore.playerScore=0
  totalScore.ComputerScore=0
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()