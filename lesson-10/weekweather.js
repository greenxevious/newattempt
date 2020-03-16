const weekURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=45275c11d5907ee4f0f87a61e10967f0'
 

    fetch(weekURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (weekcast) {
        console.log(weekcast); 
        var c = 1;
    for (i = 0; i <= 40; i++) {
        if (weekcast.list[i].dt_txt.includes("18:00:00")) {

            document.getElementById('day' + c).textContent = Math.round(weekcast.list[i].main.temp); 

            c=c+1;
        
        }
    }
    
    });
