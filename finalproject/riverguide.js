const requestURL = "https://dominicanderson1185.github.io/newattempt/extrafiles/people.json";
 
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
      
    const file = jsonObject['file'];
    for (let i = 0; i < file.length; i++ ) {

      let mypeople = document.createElement('section');
      mypeople.setAttribute('class','sec');


           let title = document.createElement('h1');
           title.textContent = file[i].name + ' ' + file[i].lastname;
           mypeople.appendChild(title);

          
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
           image.setAttribute('class', 'people')
           mypeople.appendChild(image);

   
           document.querySelector('div.meet').appendChild(mypeople);
       
        

    }

});
