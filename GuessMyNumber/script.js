// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'correctNumber!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 13;

// //for input fields you use .value
// document.querySelector('.guess').value = 20;
// // console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = document.querySelector('.guess').value;

//   console.log(guess, typeof guess);
// });

//TODO: Implementing the game logic
var randNum = Math.floor(Math.random() * 20) + 1; //trunc is also valid
console.log(randNum);
var userGuess = null;
var score = 10;
var highScore = 0;

// function reset(){
//     score = 10
//     randNum = Math.floor(Math.random() * 20) + 1;
// };

document.querySelector('.again').addEventListener('click', function reset() {
  console.log('before reset randNum: ' + randNum);
  score = 10;
  randNum = Math.floor(Math.random() * 20) + 1;
  console.log('after reset randNum: ' + randNum);
});

document.querySelector('.check').addEventListener('click', function () {
  userGuess = document.querySelector('.guess').value;
  console.log('inside the click function ' + userGuess);
  console.log('inside the click function: randNum ' + randNum);
  if (userGuess == randNum) {
    document.querySelector('.number').textContent = randNum;
    document.querySelector('.message').textContent = 'Congrats, You won!';
    document.querySelector('body').style.backgroundColor = '#60b357';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (userGuess > randNum) {
    score--;
    document.querySelector('.message').textContent = 'Try a smaller number';
  } else {
    score--;
    document.querySelector('.message').textContent = 'Try a larger number';
  }
  document.querySelector('.score').textContent = score;
});
