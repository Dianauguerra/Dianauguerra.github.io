const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=83b661e31f3c6f04c5e62b84c6287698&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    console.log(jsObject);
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
    const desc = jsObject.weather[0].description; 
    document.getElementById('imagesrc').textContent = imagesrc; 
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
   });

