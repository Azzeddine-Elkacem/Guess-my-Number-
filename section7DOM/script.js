'use strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value); 
let score = 20;
document.querySelector('.score').textContent = score;

let secretNumber = Math.trunc(Math.random()*20) + 1;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function(){
const guess = Number(document.querySelector('.guess').value);

  //when there is no input : 

  if(!guess){
    document.querySelector('.message').textContent = '⛔ No number!';
    
    //when player win : 

  }else if (guess === secretNumber){
    score++;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '🎉 Correct Number !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    //when guess is too high : 

  }else if(guess > secretNumber){
    if(score > 1){
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '📈 too High';
  }else{
    document.querySelector('.message').textContent = '🎇You lost the Game';
    document.querySelector('.score').textContent = 0;
  }

  //when guess is too low : 

  }else if (guess < secretNumber){
    if(score > 1){
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = '📉 too Low';
  }else{
    document.querySelector('.message').textContent = '🎇You lost the Game';
    document.querySelector('.score').textContent = 0;
  }}


})

  document.querySelector('.again').addEventListener('click', function reset(){
  score = 20 ;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
})





















