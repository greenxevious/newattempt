const urls = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=45275c11d5907ee4f0f87a61e10967f0';
 

    fetch(urls)
    .then(function(response) {
      return response.json();
    })
    .then(function(weekcast) {
        console.log(weekcast); 
        var c = 1;
        
    for (i = 0; i <= 40; i++) {
        if (weekcast.list[i].dt_txt.includes("18:00:00")) {

            var imagesrc = 'https://openweathermap.org/img/wn/' + weekcast.list[i].weather[0].icon + '@2x.png';
            var desc = weekcast.list[i].weather[0].description;

            document.getElementById('day' + c).textContent = Math.round(weekcast.list[i].main.temp) +'F'; 
            document.getElementById('days' + c).setAttribute('src', imagesrc);
            document.getElementById('days' + c).setAttribute('alt', desc);
            c=c+1;




        }
    }
    
    });
