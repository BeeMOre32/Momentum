const plusCounter = document.querySelector(".waterdrink-count__plus");
const minusCounter = document.querySelector(".waterdrink-count__minus");
const count = document.querySelector(".waterdrink__counter");

function pluseCount() {
  let watercount = parseInt(localStorage.getItem("water"));
  watercount = watercount + 1;
  count.innerText = `You drink water ${watercount}cup`;
  localStorage.setItem("water", watercount);
  if (watercount > 10) {
    count.innerText = "oh!! hey stop Drinking Water...";
  }
}
function minusCount() {
  let watercount = parseInt(localStorage.getItem("water"));
  watercount = watercount - 1;
  count.innerText = `You drink water ${watercount}cup`;
  localStorage.setItem("water", watercount);
  if (watercount < 0) {
    count.innerText = "OOPS ERROR!";
  }
}
const savedWaterCount = parseInt(localStorage.getItem("water"));

if (savedWaterCount !== 0) {
  count.innerText = `You drink water ${savedWaterCount}cup`;
}
plusCounter.addEventListener("click", pluseCount);
minusCounter.addEventListener("click", minusCount);
