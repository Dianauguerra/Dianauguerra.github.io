const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=83b661e31f3c6f04c5e62b84c6287698&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

  console.log(jsObject);

  //TEMPERATURE//
  document.getElementById("temperature").textContent = jsObject.main.temp;
  //DESCRIPTION//
  let desc = jsObject.weather[0].description; 
  let description = desc.toUpperCase()
  document.getElementById("description").textContent = description;
  //WINDSPEED//
  document.getElementById("windspeed").textContent = jsObject.wind.speed;

  //WIND CHILL//
  const temperature = document.getElementById("temperature").innerHTML;
  const windspeed = document.getElementById("windspeed").innerHTML;

  let windchill = Math.round((35.74 + (0.6215 * temperature) - (35.75 * (Math.pow(windspeed, 0.16))) + (0.4275 * temperature * (Math.pow(windspeed, 0.16)))));

  document.getElementById("windchill").innerHTML = windchill;
 
});
//-----------------5 DAY FORECAST-------------------------//
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  // var yyyy = today.getFullYear();
  
  // const none = yyyy + "-" + mm + "-" + dd;

  //day 1//
  var today = new Date();
  var dd = String(today.getDate()+1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  
  const first = yyyy + "-" + mm + "-" + dd;

  //day 2//
  var dd = String(today.getDate()+2).padStart(2, '0');
  const second = yyyy + "-" + mm + "-" + dd;

  //day 3//
  var dd = String(today.getDate()+3).padStart(2, '0');
  const third = yyyy + "-" + mm + "-" + dd;

  //day 4//
  var dd = String(today.getDate()+4).padStart(2, '0');
  const forth = yyyy + "-" + mm + "-" + dd;

  //day 5//
  var dd = String(today.getDate()+5).padStart(2, '0');
  const fifth = yyyy + "-" + mm + "-" + dd;
  
  // WEEKDAYS  //
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date();
  const day1_content = weekday[d.getDay()];
  const day2_content = weekday[d.getDay()+1];
  const day3_content = weekday[d.getDay()+2];
  const day4_content = weekday[d.getDay()+3];
  const day5_content = weekday[d.getDay()+4];

  const dayname1 = document.getElementById("dayName1");
  dayname1.textContent = day1_content;

  const dayname2 = document.getElementById("dayName2");
  dayname2.textContent = day2_content;

  const dayname3 = document.getElementById("dayName3");
  dayname3.textContent = day3_content;

  const dayname4 = document.getElementById("dayName4");
  dayname4.textContent = day4_content;

  const dayname5 = document.getElementById("dayName5");
  dayname5.textContent = day5_content;

  
  // JSON 5 DAY FORECAST //
  const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=83b661e31f3c6f04c5e62b84c6287698&units=imperial";
  fetch(forecastApiURL)
  .then((response) => response.json())
  
  .then((jsOnbject) => {
    let list = jsOnbject.list;
    console.log(jsOnbject);

  for (i = 0; i < list.length; i++) {
   
    if (list[i].dt_txt == (first+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("1").textContent = temp;
      document.getElementById("icon1").setAttribute("src",imgsource);
      document.getElementById("icon1").setAttribute("alt",imgalt);
      document.getElementById("icon1").setAttribute("width", 50);
      console.log(icon);
    };

    if (list[i].dt_txt == (second+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("2").textContent = temp;
      document.getElementById("icon2").setAttribute("src",imgsource);
      document.getElementById("icon2").setAttribute("alt",imgalt);
      console.log(icon);
    };
    if (list[i].dt_txt == (third+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("3").textContent = temp;
      document.getElementById("icon3").setAttribute("src",imgsource);
      document.getElementById("icon3").setAttribute("alt",imgalt);
    };

    if (list[i].dt_txt == (forth+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("4").textContent = temp;
      document.getElementById("icon4").setAttribute("src",imgsource);
      document.getElementById("icon4").setAttribute("alt",imgalt);
    
    };

    if (list[i].dt_txt == (fifth+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("5").textContent = temp;
      document.getElementById("icon5").setAttribute("src",imgsource);
      document.getElementById("icon5").setAttribute("alt",imgalt);
    };

  }});

            
