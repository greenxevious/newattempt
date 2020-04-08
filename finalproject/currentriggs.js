const riggins = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=45.4136087&lon=-116.32605&units=imperial&appid=3ffd775d59aa9393f456ca9e07a8a574'
 

    fetch(riggins)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);



    document.getElementById('curtemp').textContent = Math.round(jsonObject.main.temp);
    document.getElementById('maxtempe').textContent = Math.round(jsonObject.main.temp_max);
    document.getElementById('humid').textContent = Math.round(jsonObject.main.humidity);
    document.getElementById('windSp').textContent = Math.round(jsonObject.wind.speed);


 
  

const temp = document.getElementById('curtemp').textContent;
const wind = document.getElementById('windSp').textContent;

var t = parseFloat(temp);
var s = parseFloat(wind);

var windChill;

if (t > 50 || s < 0) {
    windChill = "N/A"
    document.getElementById('Chill').innerHTML = windChill;
}
else {
    windChill = ((35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16))*10)/10;
    windChill = Math.round(windChill);
    document.getElementById('Chill').innerHTML = windChill + "F";
}


    

});
