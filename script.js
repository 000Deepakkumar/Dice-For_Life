'use strict';

//selecting elements
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const btwNew = document.querySelector('.btn--new');
const btwRoll = document.querySelector('.btn--roll');
const btwHold = document.querySelector('.btn--hold');
const player0Score = document.querySelector('#current--0');
const player1Score = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//starting condition
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden')

let score = [0,0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//rolling dice function
btwRoll.addEventListener('click', function(){
    if(playing){
    const roll = Math.trunc(Math.random() * 6) + 1
    
    dice.classList.remove('hidden')
    dice.src = `dice-${roll}.png`;

    if(roll!=1){
        currentScore += roll;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }
    else{
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        player1Score.textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0; 
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
}
})

btwHold.addEventListener('click', function(){
    if(playing){
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

    if(score[activePlayer] >= 100)
        {
        document.body.style.backgroundImage = 'linear-gradient(to top left, #abf590 0%, #1afb5a 100%)';
        document.body.style.color = "green";
        playing = false;
        document.getElementById(`name--${activePlayer}`).innerHTML = `Player ${activePlayer+1} Wins`;
        document.querySelector(`player--${activePlayer}`).classList.remove('player--active');
        }

    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; 
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    }
})

btwNew.addEventListener('click', function(){
score0.textContent = 0;
score1.textContent = 0;
player0Score.textContent = 0;
player1Score.textContent = 0;
dice.classList.add('hidden');

score = [0,0];
currentScore = 0;
activePlayer = 0;
playing = true;

document.body.style.backgroundImage = "linear-gradient(to top left, #ba90f5 0%, #6e6af7 100%)";
document.body.style.color = "black";
document.getElementById(`name--0`).innerHTML = "Player 1"
document.getElementById(`name--1`).innerHTML = "Player 2"
player0.classList.remove('player--winner');
player1.classList.remove('player--winner');
player0.classList.remove('player--active');
player1.classList.add('player--active');
})