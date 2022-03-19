const colors = [
  "#FF9AA2",
  "#FFB7B2",
  "#FFDAC1",
  "#E2F0CB",
  "#B5EAD7",
  "#C7CEEA",
  "#FEFFBF",
  "#FCDCDF",
  "#F498C2",
  "#B0EFEF",
  "#83D9DC",
  "#F2BBAD",
  "#AFDFDB",
];
const body = document.querySelector("body");
const btn = document.querySelector(".color-change button");

function paintColor() {
  const ramdomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const ramdomColor2 = colors[Math.floor(Math.random() * colors.length)];
  body.style.background = `linear-gradient(50deg,${ramdomColor1},${ramdomColor2})`;
}

btn.addEventListener("click", paintColor);
