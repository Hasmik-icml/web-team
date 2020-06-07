// Xndir N 6

function tver(){   
    
    var n= Number(document.getElementById('num').value);

    for ( i = 2; i <= n; i++) {        

            if ( n % 2 == 0 ) {

                document.getElementById('result').innerHTML="Tiv@ parz CHE !!!";
                
            }else {

                document.getElementById('result').innerHTML="Tiv@ parz E !!!";
            }

        }     
        
    }