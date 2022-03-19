const plusCounter = document.querySelector(".waterdrink-count__plus");
const minusCounter = document.querySelector(".waterdrink-count__minus");
const count = document.querySelector(".waterdrink__counter");
const watercount = localStorage.setItem("water", parseInt("0"));

function pluseCount() {
  let watercounter = parseInt(localStorage.getItem("water"));
  watercounter = watercounter + 1;
  count.innerText = `You drink water ${watercounter}cup`;
  localStorage.setItem("water", watercounter);
  if (watercounter > 10) {
    count.innerText = "oh!! hey stop Drinking Water...";
  }
}
function minusCount() {
  let watercounter = parseInt(localStorage.getItem("water"));
  watercounter = watercounter - 1;
  count.innerText = `You drink water ${watercounter}cup`;
  localStorage.setItem("water", watercounter);
  if (watercounter < 0) {
    count.innerText = "OOPS ERROR!";
  }
}
const savedWaterCount = parseInt(localStorage.getItem("water"));

if (savedWaterCount !== 0) {
  count.innerText = `You drink water ${savedWaterCount}cup`;
}
plusCounter.addEventListener("click", pluseCount);
minusCounter.addEventListener("click", minusCount);
