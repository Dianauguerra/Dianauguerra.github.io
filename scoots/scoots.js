//Hamburger//
function toggleMenu() {
    document.getElementsByClassName('navbar')[0].classList.toggle('responsive');
}

////-----------------CURRENT WEATHER----------------------////

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=83b661e31f3c6f04c5e62b84c6287698&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

  console.log(jsObject);

  //TEMPERATURE//
  document.getElementById("c-temp").textContent = jsObject.main.temp;
  document.getElementById("c-humidity").textContent = jsObject.main.humidity;

  var icon = jsObject.weather[0].icon


  var iconsource =  "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
  document.getElementById("c-icon").setAttribute("src", iconsource);
  //DESCRIPTION//
  let desc = jsObject.weather[0].description; 
  let description = desc.toUpperCase()
  document.getElementById("c-description").textContent = description;
});
//-----------------5 DAY FORECAST-------------------------//

// JSON 5 DAY FORECAST //
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=83b661e31f3c6f04c5e62b84c6287698&units=imperial";
fetch(forecastApiURL)
.then((response) => response.json())

  .then((jsOnbject) => {
    let list = jsOnbject.list;
    console.log(jsOnbject);

    var icons = []
    var descriptions = []
    var temps = []
    var results = []
    var humidities = []

     for (i = 0; i < list.length; i++) {
      var word = list[i].dt_txt;
      
    
      if (list[i].dt_txt.substr(11,18) == "12:00:00"){
        var result = word.substr(0,10);
        var temp = list[i].main.temp;
        var icon = list[i].weather[0].icon;
        var description = list[i].weather[0].description;
        var humidity= list[i].main.humidity;

        icons.push(icon);
        descriptions.push(description);
        temps.push(temp);
        results.push(result);
        humidities.push(humidity);

      }  

    }

    console.log(temps[0])

    //FIRST DAY//
    
    var imgsource =  "http://openweathermap.org/img/wn/"+ icons[0] + "@2x.png";
    var imgalt = descriptions[0];

    document.getElementById("temp1").textContent = temps[0];
    document.getElementById("humidity1").textContent = humidities[0];
    document.getElementById("icon1").setAttribute("src",imgsource);
    document.getElementById("icon1").setAttribute("alt",imgalt);

    var dateObj = new Date(results[0]); 
    var day1_content = dateObj.toLocaleString("default", { weekday: "long" });
    const dayname1 = document.getElementById("dayName1");
    dayname1.textContent = day1_content;

    //SECOND DAY//
    var imgsource =  "http://openweathermap.org/img/wn/"+ icons[1] + "@2x.png";
    var imgalt = descriptions[1];

    document.getElementById("temp2").textContent = temps[1];
    document.getElementById("humidity2").textContent = humidities[1];
    document.getElementById("icon2").setAttribute("src",imgsource);
    document.getElementById("icon2").setAttribute("alt",imgalt);

    var dateObj = new Date(results[1]); 
    var day2_content = dateObj.toLocaleString("default", { weekday: "long" });
    const dayname2 = document.getElementById("dayName2");
    dayname2.textContent = day2_content;

    //THIRD DAY//
    var imgsource =  "http://openweathermap.org/img/wn/"+ icons[2] + "@2x.png";
    var imgalt = descriptions[2];

    document.getElementById("temp3").textContent = temps[2];
    document.getElementById("humidity3").textContent = humidities[2];
    document.getElementById("icon3").setAttribute("src",imgsource);
    document.getElementById("icon3").setAttribute("alt",imgalt);
    
    var dateObj = new Date(results[2]); 
    var day3_content = dateObj.toLocaleString("default", { weekday: "long" });
    const dayname3 = document.getElementById("dayName3");
    dayname3.textContent = day3_content;

    //FOURTH DAY//
    var imgsource =  "http://openweathermap.org/img/wn/"+ icons[3] + "@2x.png";
    var imgalt = descriptions[3];

    document.getElementById("temp4").textContent = temps[3];
    document.getElementById("humidity4").textContent = humidities[3];
    document.getElementById("icon4").setAttribute("src",imgsource);
    document.getElementById("icon4").setAttribute("alt",imgalt);

    var dateObj = new Date(results[3]); 
    var day4_content = dateObj.toLocaleString("default", { weekday: "long" });
    const dayname4 = document.getElementById("dayName4");
    dayname4.textContent = day4_content;

    //FIFTH DAY//
    var imgsource =  "http://openweathermap.org/img/wn/"+ icons[4] + "@2x.png";
    var imgalt = descriptions[4];

    document.getElementById("temp5").textContent = temps[4];
    document.getElementById("humidity5").textContent = humidities[4];
    document.getElementById("icon5").setAttribute("src",imgsource);
    document.getElementById("icon5").setAttribute("alt",imgalt);

    var dateObj = new Date(results[4]); 
    var day5_content = dateObj.toLocaleString("default", { weekday: "long" });
    const dayname5 = document.getElementById("dayName5");
    dayname5.textContent = day5_content;

});

///--------------------RESERVATION: RENTALS PRICES----------------////
const ReservationData = "https://raw.githubusercontent.com/Dianauguerra/Dianauguerra.github.io/master/scoots/data/reservation.json"
fetch(ReservationData)
  .then((response) => response.json())
  .then((jsnbject) => {

  console.log(jsnbject);

  // HONDA METRO SCOOTER //
  document.getElementById("scooter1").textContent = jsnbject.reservation[0].type;
  document.getElementById("smax1").textContent = jsnbject.reservation[0].persons;
  document.getElementById("sr-half-price1").textContent = jsnbject.reservation[0].halfday;
  document.getElementById("sr-full-price1").textContent = jsnbject.reservation[0].fullday;
 
  // HONDA DIO SCOOTER //
  document.getElementById("scooter2").textContent = jsnbject.reservation[1].type;
  document.getElementById("smax2").textContent = jsnbject.reservation[1].persons;
  document.getElementById("sr-half-price2").textContent = jsnbject.reservation[1].halfday;
  document.getElementById("sr-full-price2").textContent = jsnbject.reservation[1].fullday;
  
  // HONDA PCX150 SCOOTER//
  document.getElementById("scooter3").textContent = jsnbject.reservation[2].type;
  document.getElementById("smax3").textContent = jsnbject.reservation[2].persons;
  document.getElementById("sr-half-price3").textContent = jsnbject.reservation[2].halfday;
  document.getElementById("sr-full-price3").textContent = jsnbject.reservation[2].fullday;

  // HONDA PIONEER ATV //
  document.getElementById("atv").textContent = jsnbject.reservation[3].type;
  document.getElementById("amax1").textContent = jsnbject.reservation[3].persons;
  document.getElementById("ar-half-price1").textContent = jsnbject.reservation[3].halfday;
  document.getElementById("ar-full-price1").textContent = jsnbject.reservation[3].fullday;
  
  // Jeep Wrangler-4 door with a/c //
  document.getElementById("jeep1").textContent = jsnbject.reservation[4].type;
  document.getElementById("jmax1").textContent = jsnbject.reservation[4].persons;
  document.getElementById("jr-half-price1").textContent = jsnbject.reservation[4].halfday;
  document.getElementById("jr-full-price1").textContent = jsnbject.reservation[4].fullday;

  // Jeep Wrangler -2 door//
  document.getElementById("jeep2").textContent = jsnbject.reservation[5].type;
  document.getElementById("jmax2").textContent = jsnbject.reservation[5].persons;
  document.getElementById("jr-half-price2").textContent = jsnbject.reservation[5].halfday;
  document.getElementById("jr-full-price2").textContent = jsnbject.reservation[5].fullday;
});

///--------------------WALK-IN: RENTALS PRICES----------------////

const WalkinData = "https://raw.githubusercontent.com/Dianauguerra/Dianauguerra.github.io/master/scoots/data/walkin.json"
fetch(WalkinData)
  .then((response) => response.json())
  .then((jsnobject) => {  

  // HONDA METRO SCOOTER //
  document.getElementById("sw-half-price1").textContent = jsnobject.walkin[0].halfday;
  document.getElementById("sw-full-price1").textContent = jsnobject.walkin[0].fullday;
 
  // HONDA DIO SCOOTER //
  document.getElementById("sw-half-price2").textContent = jsnobject.walkin[1].halfday;
  document.getElementById("sw-full-price2").textContent = jsnobject.walkin[1].fullday;
  
  // HONDA PCX150 SCOOTER//
  document.getElementById("sw-half-price3").textContent = jsnobject.walkin[2].halfday;
  document.getElementById("sw-full-price3").textContent = jsnobject.walkin[2].fullday;

  // HONDA PIONEER ATV //
  document.getElementById("aw-half-price1").textContent = jsnobject.walkin[3].halfday;
  document.getElementById("aw-full-price1").textContent = jsnobject.walkin[3].fullday;
  
  // Jeep Wrangler-4 door with a/c //
  document.getElementById("jw-half-price1").textContent = jsnobject.walkin[4].halfday;
  document.getElementById("jw-full-price1").textContent = jsnobject.walkin[4].fullday;

  // Jeep Wrangler -2 door//
  document.getElementById("jw-half-price2").textContent = jsnobject.walkin[5].halfday;
  document.getElementById("jw-full-price2").textContent = jsnobject.walkin[5].fullday;


  });
