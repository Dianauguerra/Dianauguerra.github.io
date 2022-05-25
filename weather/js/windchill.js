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
  
// JSON 5 DAY FORECAST //
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=83b661e31f3c6f04c5e62b84c6287698&units=imperial";
fetch(forecastApiURL)
.then((response) => response.json())

  .then((jsOnbject) => {
    let list = jsOnbject.list;
    console.log(jsOnbject);

    var icons = []
    var descriptions = []
    var temps = []
    var results = []

     for (i = 0; i < list.length; i++) {
      var word = list[i].dt_txt;
      
    
      if (list[i].dt_txt.substr(11,18) == "18:00:00"){
        // console.log(i)
        var result = word.substr(0,10);
        var temp = list[i].main.temp;
        var icon = list[i].weather[0].icon;
        var description = list[i].weather[0].description;

        icons.push(icon);
        descriptions.push(description);
        temps.push(temp);
        results.push(result);

      }  

    }

  //FIRST DAY//
  var imgsource =  "http://openweathermap.org/img/wn/"+ icons[0] + "@2x.png";
  var imgalt = descriptions[0];

  document.getElementById("1").textContent = temps[0];
  document.getElementById("icon1").setAttribute("src",imgsource);
  document.getElementById("icon1").setAttribute("alt",imgalt);

  var dateObj = new Date(results[0]); 
  var day1_content = dateObj.toLocaleString("default", { weekday: "long" });
  const dayname1 = document.getElementById("dayName1");
  dayname1.textContent = day1_content;

  //SECOND DAY//
  var imgsource =  "http://openweathermap.org/img/wn/"+ icons[1] + "@2x.png";
  var imgalt = descriptions[1];

  document.getElementById("2").textContent = temps[1];
  document.getElementById("icon2").setAttribute("src",imgsource);
  document.getElementById("icon2").setAttribute("alt",imgalt);

  var dateObj = new Date(results[1]); 
  var day2_content = dateObj.toLocaleString("default", { weekday: "long" });
  const dayname2 = document.getElementById("dayName2");
  dayname2.textContent = day2_content;

  //THIRD DAY//
  var imgsource =  "http://openweathermap.org/img/wn/"+ icons[2] + "@2x.png";
  var imgalt = descriptions[2];

  document.getElementById("3").textContent = temps[2];
  document.getElementById("icon3").setAttribute("src",imgsource);
  document.getElementById("icon3").setAttribute("alt",imgalt);
  
  var dateObj = new Date(results[2]); 
  var day3_content = dateObj.toLocaleString("default", { weekday: "long" });
  const dayname3 = document.getElementById("dayName3");
  dayname3.textContent = day3_content;

  //FOURTH DAY//
  var imgsource =  "http://openweathermap.org/img/wn/"+ icons[3] + "@2x.png";
  var imgalt = descriptions[3];

  document.getElementById("4").textContent = temps[3];
  document.getElementById("icon4").setAttribute("src",imgsource);
  document.getElementById("icon4").setAttribute("alt",imgalt);

  var dateObj = new Date(results[3]); 
  var day4_content = dateObj.toLocaleString("default", { weekday: "long" });
  const dayname4 = document.getElementById("dayName4");
  dayname4.textContent = day4_content;

  //FIFTH DAY//
  var imgsource =  "http://openweathermap.org/img/wn/"+ icons[4] + "@2x.png";
  var imgalt = descriptions[4];

  document.getElementById("5").textContent = temps[4];
  document.getElementById("icon5").setAttribute("src",imgsource);
  document.getElementById("icon5").setAttribute("alt",imgalt);

  var dateObj = new Date(results[4]); 
  var day5_content = dateObj.toLocaleString("default", { weekday: "long" });
  const dayname5 = document.getElementById("dayName5");
  dayname5.textContent = day5_content;

});
            

      

    
