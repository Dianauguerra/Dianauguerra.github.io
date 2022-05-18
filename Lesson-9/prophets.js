const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(listprophets);
  });

function listprophets(prophet) {

  //methods//
  let name = prophet.name; 
  let lastname = prophet.lastname;
  let birthdate = prophet.birthdate;
  let birthplace = prophet.birthplace;
  let order = prophet.order;

  //elements//
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let img = document.createElement("img");
  let birthcontent = document.createElement("p");
  let birthplaceontent = document.createElement("p");

  //content to display//
  h2.textContent = `${name} ${lastname}`;

  //inner HTML//
  birthplaceontent.innerHTML = `<strong>Place of Birth:</strong> ${birthplace}`;
  birthcontent.innerHTML = `<strong>Date of Birth:</strong> ${birthdate}`;
  
  //attributes//
  img.setAttribute("src", prophet.imageurl);
  img.setAttribute('alt', name + " " + lastname + " - " + order);

  //appending children of cards div//

  card.appendChild(h2);
  card.appendChild(birthcontent);
  card.appendChild(birthplaceontent);
  card.appendChild(img);
  document.querySelector(".cards").appendChild(card);

}