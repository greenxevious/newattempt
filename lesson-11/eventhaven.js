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
