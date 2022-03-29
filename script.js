'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore, activePlayer;

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
};
init();

// 2. Rolling dice
btnRoll.addEventListener('click', function () {
  // Generate a random dice roll & display
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  currentScore += dice;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
});
