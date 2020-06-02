setInterval(Clock,500);                                  // часы
 
var idSec = document.getElementById("sec");
var idMin = document.getElementById("min");
var idHour = document.getElementById("hour");
var date = new Date();
    function Clock(){
    idSec.style.transform = 'rotate('+ 6 * date.getSeconds() +'deg)';
    idMin.style.transform = 'rotate('+ 6 * date.getMinutes() +'deg)';
    idHour.style.transform = 'rotate('+ 30 * date.getHours() +'deg)';
    date = new Date();   
}

// var clock = document.getElementById('clock');               // перетаскиивание
// clock.onmousedown = function() {    
//      document.onmousemove = function(event){
//         clock.style.position = 'absolute';
//         document.body.appendChild(clock);
//         clock.style.left = event.pageX - 100   + 'px';
//         clock.style.top = event.pageY - 150 + 'px';
//         }
// }
// clock.onmouseup = function(){
//     document.onmousemove = null;    
//  }
// clock.ondragstart = function() {
//   return false;
// }
