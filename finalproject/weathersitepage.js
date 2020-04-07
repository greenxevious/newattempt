const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
 
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {

      if (i == '1'|| i == '4'|| i == '5')
      {
      let card = document.createElement('section');

           let h2 = document.createElement('h2');
           h2.textContent = 'Town Name: ' +  towns[i].name;
           card.appendChild(h2);

           let h3 = document.createElement('h3');
           h3.textContent = 'The towns motto: '+ towns[i].motto;
           card.appendChild(h3);


           let averageRainfall = document.createElement('p');
           averageRainfall.textContent = 'Your Average Rainfall: ' + towns[i].averageRainfall;
           card.appendChild(averageRainfall);

   
           let yearFounded = document.createElement('p');
           yearFounded.textContent = "Year the town was Founded: " + towns[i].yearFounded;
           card.appendChild(yearFounded);

           let currentPopulation = document.createElement('p');
           currentPopulation.textContent = "Your Current Population: " + towns[i].currentPopulation;
           card.appendChild(currentPopulation);


           let image = document.createElement('img');
           image.setAttribute('src',towns[i].photo);
           card.appendChild(image);

   
           document.querySelector('div.cards').appendChild(card);

          
       
}


    }

});
