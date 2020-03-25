const apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip=83287,us&units=imperial&appid=45275c11d5907ee4f0f87a61e10967f0';
 

    fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);



    document.getElementById('curtemp').textContent = Math.round(jsonObject.main.temp);
    document.getElementById('tempe').textContent = Math.round(jsonObject.main.temp_max);
    document.getElementById('humid').textContent = Math.round(jsonObject.main.humidity);
    document.getElementById('windSpeed').textContent = Math.round(jsonObject.wind.speed);

 
  

const temp = document.getElementById('curtemp').textContent;
const wind = document.getElementById('windSpeed').textContent;

var t = parseFloat(temp);
var s = parseFloat(wind);

var windChill;

if (t > 50 || s < 0) {
    windChill = "N/A"
    document.getElementById('windChill').innerHTML = windChill;
}
else {
    windChill = ((35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16))*10)/10;
    windChill = Math.round(windChill);
    document.getElementById('windChill').innerHTML = windChill;
}


    

});


const apiURL = 'http://api.openweathermap.org/data/2.5/weather?zip=83276,us&units=imperial&appid=48f43db2ed0d5510dff2f687f798aa62';
 

    fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);



    document.getElementById('curtemp').textContent = Math.round(jsonObject.main.temp);
    document.getElementById('tempe').textContent = Math.round(jsonObject.main.temp_max);
    document.getElementById('humid').textContent = Math.round(jsonObject.main.humidity);
    document.getElementById('windSpeed').textContent = Math.round(jsonObject.wind.speed);

 
  

const temp = document.getElementById('curtemp').textContent;
const wind = document.getElementById('windSpeed').textContent;

var t = parseFloat(temp);
var s = parseFloat(wind);

var windChill;

if (t > 50 || s < 0) {
    windChill = "N/A"
    document.getElementById('windChill').innerHTML = windChill;
}
else {
    windChill = ((35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16))*10)/10;
    windChill = Math.round(windChill);
    document.getElementById('windChill').innerHTML = windChill;
}


    

});


const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
 
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {

if (i == '2')
{
    let card = document.createElement('article');

    let events1 = document.createElement('p');
    let events2 = document.createElement('p');
    let events3 = document.createElement('p');
    let events4 = document.createElement('p');

    let title = document.createElement('h1')
   
    
    title.textContent = 'Your Local Events';
    events1.textContent = towns[i].events[0];
    events2.textContent = towns[i].events[1];
    events3.textContent = towns[i].events[2];
    events4.textContent = towns[i].events[3];

    card.appendChild(title);
    card.appendChild(events1);
    card.appendChild(events2);
    card.appendChild(events3);
    card.appendChild(events4);


    document.querySelector('div.cards').appendChild(card);

   

          
       
}


    }

});

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
 
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {

if (i == '0')
{
    let card = document.createElement('article');

    let events1 = document.createElement('p');
    let events2 = document.createElement('p');
    let events3 = document.createElement('p');
    let events4 = document.createElement('p');

    let title = document.createElement('h1')
   
    
    title.textContent = 'Your Local Events';
    events1.textContent = towns[i].events[0];
    events2.textContent = towns[i].events[1];
    events3.textContent = towns[i].events[2];

    card.appendChild(title);
    card.appendChild(events1);
    card.appendChild(events2);
    card.appendChild(events3);


    document.querySelector('div.cards').appendChild(card);

   

          
       
}


    }

});


















