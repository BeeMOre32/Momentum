const userinput = document.querySelector("#userinputnumber");
const userguess = document.querySelector("#guess__number input");
const guessform = document.querySelector("#guess__number");
const h2 = document.querySelector("#guess__number h2");

function guess(event) {
  const userinputnum = parseInt(userinput.value);
  const computerguess = Math.random() * userinputnum;
  const computerguessnum = Math.ceil(computerguess);
  const userguessnum = parseInt(userguess.value);
  event.preventDefault();
  if (computerguessnum === userguessnum) {
    h2.innerText = `You chose ${userguessnum} and the machine chose ${computerguessnum}. You win!`;
  } else {
    h2.innerText = `You chose ${userguessnum} and the machine chose ${computerguessnum}. You lose!`;
  }
}

guessform.addEventListener("submit", guess);
