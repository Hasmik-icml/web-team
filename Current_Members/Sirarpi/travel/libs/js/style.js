let list = document.getElementById("navBar").querySelectorAll("li a");

list.onclick( function () {
    for (let i = 0; i < list.length; i++ ){

        if(list[i].classList.contains("active")){
            list[i].classList.remove("active")
        } else {
            list[i].classList.add("active")
        }
    }
});
