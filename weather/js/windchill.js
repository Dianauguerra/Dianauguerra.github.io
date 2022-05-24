const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=83b661e31f3c6f04c5e62b84c6287698&units=imperial";

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
  //day 1/
  var today = new Date();
  var dd = String(today.getDate()+0).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  
  const first = yyyy + "-" + mm + "-" + dd;

  //day 2//
  var today = new Date();
  var dd = String(today.getDate()+1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  
  const second = yyyy + "-" + mm + "-" + dd;

  //day 3//
  var dd = String(today.getDate()+2).padStart(2, '0');
  const third = yyyy + "-" + mm + "-" + dd;

  //day 4//
  var dd = String(today.getDate()+3).padStart(2, '0');
  const forth = yyyy + "-" + mm + "-" + dd;

  //day 5//
  var dd = String(today.getDate()+4).padStart(2, '0');
  const fifth = yyyy + "-" + mm + "-" + dd;
  
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
      console.log(`icon1 ${icon}`)
    };

    if (list[i].dt_txt == (second+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("2").textContent = temp;
      document.getElementById("icon2").setAttribute("src",imgsource);
      document.getElementById("icon2").setAttribute("alt",imgalt);
      console.log(`icon2 ${icon}`)
    };
    if (list[i].dt_txt == (third+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("3").textContent = temp;
      document.getElementById("icon3").setAttribute("src",imgsource);
      document.getElementById("icon3").setAttribute("alt",imgalt);
      console.log(`icon3 ${icon}`)
    };

    if (list[i].dt_txt == (forth+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("4").textContent = temp;
      document.getElementById("icon4").setAttribute("src",imgsource);
      document.getElementById("icon4").setAttribute("alt",imgalt);
      console.log(`icon4 ${icon}`)
    
    };

    if (list[i].dt_txt == (fifth+ " " + "18:00:00")){
      let temp = list[i].main.temp;
      const icon = list[i].weather[0].icon;
      const imgsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      const imgalt = list[i].weather[0].description;
      document.getElementById("5").textContent = temp;
      document.getElementById("icon5").setAttribute("src",imgsource);
      document.getElementById("icon5").setAttribute("alt",imgalt);
      console.log(`icon5 ${icon}`)

    };

  }});

            

      

    
