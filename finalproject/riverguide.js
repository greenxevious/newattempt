const requestURL = "https://cors-anywhere.herokuapp.com/https://dominicanderson1185.github.io/newattempt/extrafiles/json.html";
 
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const file = jsonObject['file'];
    for (let i = 0; i <= file.length; i++ ) {

      let mypeople = document.createElement('section');

           let h2 = document.createElement('h2');
           h2.textContent = file[i].name + ' ' + file[i].lastname;
           mypeople.appendChild(h2);

          
           let exp = document.createElement('p');
           exp.textContent = 'Years of Experieance: ' + file[i].years;
           mypeople.appendChild(exp);

           let cert = document.createElement('p');
           cert.textContent = "My Certifications: " + file[i].cert;
           mypeople.appendChild(cert);
   
           let compemail = document.createElement('p');
           compemail.textContent = "Company Email: " + file[i].email;
           mypeople.appendChild(compemail);


           let bio = document.createElement('p');
           bio.textContent = "Hello All: "+ file[i].bio;
           mypeople.appendChild(bio);
          

           let image = document.createElement('img');
           image.setAttribute('src', file[i].picture);
           mypeople.appendChild(image);

   
           document.querySelector('div.meet').appendChild(mypeople);
       
        

    }

});
