'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore,
  activePlayer,
  scores = [0, 0],
  playing;

// 1. App starting condition
const init = function () {
  // Initially, player's current and total scores are set to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Hide the dice
  diceEl.classList.add('hidden');

  // dynamic currentScore variable
  currentScore = 0;

  // Set player 1 as active player
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  // Gamemode on
  playing = true;
};
init();

const switchPlayer = function () {
  // active player current scores 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // dynamic currentScore variable
  currentScore = 0;

  // toggle active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// 2. Rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice roll & display
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Add dice rolls points to currentScore variable and show it to the active player's current scores (exception 1, toggle player)
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // Gamemode off
      playing = false;

      // Set a different background color to winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else switchPlayer();

    // Hide the dice
    diceEl.classList.add('hidden');
  }
});
