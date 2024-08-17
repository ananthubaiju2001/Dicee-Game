
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  let randomNumber1 = rollDice();
  let randomNumber2 = rollDice();
  
 
 
  let diceImage1 = document.querySelector('.img1');
  diceImage1.setAttribute('src', `./images/dice${randomNumber1}.png`);
  

  let diceImage2 = document.querySelector('.img2');
  diceImage2.setAttribute('src', `./images/dice${randomNumber2}.png`);
  
  let heading = document.querySelector('h1');
  if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    heading.textContent = "Player 2 Wins! 🚩";
  } else {
    heading.textContent = "It's a Draw!";
  }
  