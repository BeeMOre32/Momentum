const API_KEY = "bc5e596daf72da972e0bebed1d8d36b8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((Data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = Data.name;
      weather.innerText = `${Data.weather[0].main} / ${Data.main.temp}°C`;
    });
}
function oneGeoError() {
  alert("Can't find you. I think you're loc is wrong. =<");
}

navigator.geolocation.getCurrentPosition(onGeoOk, oneGeoError);
