// ***********************3*****************************
// // comment  3-rd tarberakum chem karoxanum optionner@ @st click-i vercnel @ntaciky,
// // ev maqrel grvacy


// var allFruitsOpt = document.getElementById("fruits")
// var result = document.getElementById("fruitsValue")
// var len  = allFruitsOpt.length
//
// // console.log(allFruitsOpt.options[1].text)
// // console.log(allFruitsOpt.options[1])
// // console.log(len)
//
// for(let i = 1; i < len; i++) {
//     allFruitsOpt.options[i].onclick =  function ()
//     {
//         if (result.innerHTML === allFruitsOpt.options[i].text) {
//             result.innerHTML = ""
//         }
//         result.innerHTML = allFruitsOpt.options[i].text
//     }
// }

//***********************3*****************************


//***********************2*****************************
// function showResult(){
//     let fruitsList = document.getElementById("fruits");
//     let fruitsValue = document.getElementById("fruitsValue");
//     let collection = fruitsList.selectedOptions;
//     let output = "";
//     for (let i=0; i<collection.length; i++) {
//         if (collection[i].text === "Apple"){
//             output += collection[i].text + " - 2500 /d";
//         }else if (collection[i].text === "Orange"){
//             output += collection[i].text + " - 3500 /d";
//         }else if (collection[i].text === "Banana"){
//             output += collection[i].text + " - 3500 /d";
//         } else{
//             output += "Please select some of the versions";
//         }
//     }
//     fruitsValue.innerHTML = output;
// }
//***********************2******************************


//***********************1******************************
//     var fruit = document.getElementById('fruits')
//     var res = document.getElementById('fruitsValue')
//     var newPrice = document.createElement('p')
//
//     fruit.onchange = function () {
//         res.innerHTML = fruit.options[fruit.selectedIndex].text
//         if (fruit.options[fruit.selectedIndex].text === "Apple"){
//             res.appendChild(newPrice).innerHTML = "2500/d"
//         } else if (fruit.options[fruit.selectedIndex].text === "Orange"){
//             res.appendChild(newPrice).innerHTML = "4000/d"
//         }else if (fruit.options[fruit.selectedIndex].text === "Banana") {
//             res.appendChild(newPrice).innerHTML = "4000/d"
//         } else{
//             res.appendChild(newPrice).innerHTML = "Please select some of the versions"
//
//         }
//     }
//***********************1******************************
