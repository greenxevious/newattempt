const requestURL = "https://cors-anywhere.herokuapp.com/https://dominicanderson1185.github.io/newattempt/extrafiles/json.html";
 
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const file = jsonObject['file'];
    for (let i = 0; i < file.length; i++ ) {

      let mypeople = document.createElement('section');

           let h2 = document.createElement('h2');
           h2.textContent = file[i].name + ' ' + file[i].lastname;
           mypeople.appendChild(h2);

          
           let birth = document.createElement('p');
           birth.textContent = 'Years of Experieance: ' + file[i].years;
           mypeople.appendChild(birth);

   
           let birthPlace = document.createElement('p');
           birthPlace.textContent = "Company Email: " + file[i].email;
           mypeople.appendChild(birthPlace);

          

           let image = document.createElement('img');
           image.setAttribute('src', file[i].picture);
           mypeople.appendChild(image);

   
           document.querySelector('div.meet').appendChild(mypeople);
       
        

    }

});
