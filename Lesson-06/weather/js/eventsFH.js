const eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const towns = jsObject["towns"];
    const fishhaven = towns[2];

    
    document.getElementById("event1").textContent = fishhaven.events[0];
    document.getElementById("event2").textContent = fishhaven.events[1];
    document.getElementById("event3").textContent = fishhaven.events[2];

});
