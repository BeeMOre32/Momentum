const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const hiddenQuote = document.querySelector(".hidden.quote");
const hiddenColumn = document.querySelector(".hidden.first-cloumn");

function onLoginSubmit(event) {
  localStorage.setItem("water", 0);

  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  hiddenQuote.classList.remove(HIDDEN_CLASSNAME);
  hiddenColumn.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `HEY! WHAT's UP ${username}?`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
