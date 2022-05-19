const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    towns.forEach(listtown);
  });

function listtown(town) {

  //elements//
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let motto= document.createElement("p");
  let year = document.createElement("p");
  let currentPopulation = document.createElement("p");
  let averageRainFall = document.createElement("p");
  let events = document.createElement("p");
  let statsdiv = document.createElement("div");
  let imgdiv = document.createElement("div");
  let width = "400"

  //classnames//
  statsdiv.className = "statsdiv";
  imgdiv.className = "imgdiv";

  //content to display//
  h2.textContent = town.name;
  year.textContent = town.yearFounded;

  

  //inner HTML//
  year.innerHTML = `<strong>Year Founded:</strong> ${town.yearFounded}`;
  currentPopulation.innerHTML = `<strong>Current Population:</strong> ${town.currentPopulation}`;
  averageRainFall.innerHTML = `<strong>Average Rainfall:</strong> ${town.averageRainfall}`;
  events.innerHTML = `<strong>Events :</strong> ${town.events}`;
  motto.innerHTML = `<i>${ town.motto}`;
  
  //attributes//
  img.setAttribute("src", town.photo);
  img.setAttribute("width", width );
  img.setAttribute('alt', town.name + "-" + town.order);

  //appending children of cards div//

  statsdiv.appendChild(h2);
  statsdiv.appendChild(motto);
  statsdiv.appendChild(year);
  statsdiv.appendChild(currentPopulation);
  statsdiv.appendChild(averageRainFall);
  statsdiv.appendChild(events);

  imgdiv.appendChild(img);
  
  card.appendChild(imgdiv);
  card.appendChild(statsdiv);
  document.querySelector(".cards").appendChild(card);

}