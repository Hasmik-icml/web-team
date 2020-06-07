console.log('I am here');
var text = document.getElementById('text');
var number = document.getElementById('number');
var obj  = document.getElementById('javascript');
obj.classList.remove('col-12');
obj.classList.add('new_container');
var menu = document.querySelector('.menu');

text = text.innerHTML;

number= Number(number.innerHTML);
console.log(text, typeof text);
console.log(number, typeof number);
console.log(obj, menu);
var div = document.createElement('div');
div.id = "New_Div";
div.className = "element";
div.style.background = "red";
div.style.width = "600px";
div.onclick = function(){
    this.style.background = "green";
}
div.innerHTML = "This is new Div";
document.write('This is a Write text');
var elem = document.getElementById('element');
console.log(elem);
elem.appendChild(div);
console.log(div, typeof div);
console.log(typeof obj, obj.__proto__);
console.log(div.__proto__);

var block =document.getElementsByClassName("block");

console.log(block);
block.onclick =function(){
    block.style.color="red";
}

function changeFunction() {
    var a = document.getElementById("Select").value;
    document.getElementById("result").innerHTML = "Result: " + a;
  }

function mouseOver(){
    var  e = event.target;
    var item = document.querySelectorAll('.item');
    for (var j = 0; j<item.length; j++){
           item[j].style.color = "black";
    }
    e.style.color = "red";
}
