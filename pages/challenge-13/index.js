const stoneBtn = document.getElementById('stone');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const message = document.getElementById('message');
const options = ['stone', 'paper', 'scissors'];
const playerScoreEl = document.getElementById('player-score');
const cpuScoreEl = document.getElementById('cpu-score');
const modal = new bootstrap.Modal(document.getElementById('modal'));

let playerScore = 0;
let cpuScore = 0;
let playerOption = '';
let cpuOption = '';

const cpu = () => {
  const decision = Math.floor(Math.random() * 3);
  return options[decision];
};

const game = (event) => {
  playerOption = event.target.value;
  cpuOption = cpu();

  //Same VS Same
  const case1 = () => {
    playerOption === cpuOption && printMessage();
  };

  //Scissors VS Paper
  const case2 = () => {
    if (playerOption === 'scissors' && cpuOption === 'paper') {
      printMessage(true);
      playerScore++;
    } else if (playerOption === 'paper' && cpuOption === 'scissors') {
      printMessage(false);
      cpuScore++;
    }
  };

  //Paper VS Stone
  const case3 = () => {
    if (playerOption === 'paper' && cpuOption === 'stone') {
      printMessage(true);
      playerScore++;
    } else if (playerOption === 'stone' && cpuOption === 'paper') {
      printMessage(false);
      cpuScore++;
    }
  };

  //Stone VS Scissors
  const case4 = () => {
    if (playerOption === 'stone' && cpuOption === 'scissors') {
      printMessage(true);
      playerScore++;
    } else if (playerOption === 'scissors' && cpuOption === 'stone') {
      printMessage(false);
      cpuScore++;
    }
  };

  case1();
  case2();
  case3();
  case4();
  updateScore();
};

const printMessage = (flag) => {
  if (flag === true) {
    message.innerHTML = `
      <h4 class="text-success">Has Ganado</h4>
      <span>Player: ${playerOption} VS CPU: ${cpuOption}</span>
    `;
  } else if (flag === false) {
    message.innerHTML = `
      <h4 class="text-danger">Has perdido</h4>
      <span>Player: ${playerOption} VS CPU: ${cpuOption}</span>
    `;
  } else {
    message.innerHTML = `
      <h4 class="text-info">Empate</h4>
      <span>Player: ${playerOption} VS CPU: ${cpuOption}</span>
    `;
  }

  modal.show();
};

const updateScore = () => {
  playerScoreEl.innerText = playerScore;
  cpuScoreEl.innerText = cpuScore;
};

stoneBtn.addEventListener('click', game);
paperBtn.addEventListener('click', game);
scissorsBtn.addEventListener('click', game);
