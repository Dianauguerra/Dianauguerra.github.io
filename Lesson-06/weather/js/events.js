const eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const towns = jsObject["towns"];
    const preston = towns[4];

    
    document.getElementById("event1").textContent = preston.events[0];
    document.getElementById("event2").textContent = preston.events[1];
    document.getElementById("event3").textContent = preston.events[2];





  
    
  //DESCRIPTION//
//   let desc = jsObject.weather[0].description; 
//   let description = desc.toUpperCase()
//   document.getElementById("description").textContent = description;
//   //WINDSPEED//
//   document.getElementById("windspeed").textContent = jsObject.wind.speed;

//   //WIND CHILL//
//   const temperature = document.getElementById("temperature").innerHTML;
//   const windspeed = document.getElementById("windspeed").innerHTML;

//   let windchill = Math.round((35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windspeed, 0.16))) + (0.4275 * temperature * (Math.pow(windspeed, 0.16)))));

//   document.getElementById("windchill").innerHTML = windchill;
 
});
