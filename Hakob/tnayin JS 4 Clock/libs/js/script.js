setInterval(Clock,500);                                  
 
var newSec = document.getElementById("sec");
var newMin = document.getElementById("min");
var newHour = document.getElementById("hour");
var date = new Date();
    function Clock(){
    newSec.style.transform = 'rotate('+ 6 * date.getSeconds() +'deg)';
    newMin.style.transform = 'rotate('+ 6 * date.getMinutes() +'deg)';
    newHour.style.transform = 'rotate('+ 30 * date.getHours() +'deg)';
    date = new Date();   
}


