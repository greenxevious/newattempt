const temperature = parseFloat(document.getElementById("temp").textContent);
const Wind = parseFloat(document.getElementById("windsp").textContent);

if(temperature<=50 && Wind >=3){
const chill  =
(35.74 + (0.6215*temperature)-(35.75*Math.pow(Wind,0.16))+
(0.4275*temperature*Math.pow(Wind,0.16))).toFixed(2);
document.getElementById("chill").textContent = chill;
}
else{
    const chill =("toasty");
    document.getElementById("chill").textContent = chill;
}