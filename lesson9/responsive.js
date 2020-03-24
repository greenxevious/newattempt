function myFunction() {
    var x = document.getElementById("mymenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }