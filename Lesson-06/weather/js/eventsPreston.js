const eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventsURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const towns = jsObject["towns"];
    const preston = towns[4];

    
    document.getElementById("event1").textContent = preston.events[0];
    document.getElementById("event2").textContent = preston.events[1];
    document.getElementById("event3").textContent = preston.events[2];

});
