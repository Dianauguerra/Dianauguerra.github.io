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
  const name = prophet.name; 
  const lastname = prophet.lastname;
  const birthdate = prophet.birthdate;
  const birthplace = prophet.birthplace;

  //elements//
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let portrait = document.createElement("img");
  let birthcontent = document.createElement("p");
  let birthplaceontent = document.createElement("p");


  //to display//
  h2.textContent = `${name} ${lastname}`;
  birthplaceontent.innerHTML = `<strong>Place of Birth:</strong> ${birthplace}`;
  birthcontent.innerHTML = `<strong>Date of Birth:</strong> ${birthdate}`;
  portrait.setAttribute("src", prophet.imageurl);


  //appending children of cards div//
  document.querySelector(".cards").appendChild(card);
  document.querySelector(".cards").appendChild(h2);
  document.querySelector(".cards").appendChild(birthcontent);
  document.querySelector(".cards").appendChild(birthplaceontent);
  document.querySelector(".cards").appendChild(portrait);


}