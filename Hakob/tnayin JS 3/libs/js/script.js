
function restart(){
    var m = 0;
    
    m = m + 1;
    
    for ( var i=0; i <= m; i++){  
    
      setTimeout(function(){ 
        document.getElementById('kanach').style.background="green"
       }, 6000);
      
      setTimeout(function(){ 
        document.getElementById('dexin').style.background="yellow"
       }, 8000);
      
       setTimeout(function(){ 
        document.getElementById('kanach').style.background="lightgrey"
       }, 8000);
       setTimeout(function(){ 
        document.getElementById('dexin').style.background="lightgrey"
       }, 10000);
    
    
                for(var j = 0; j < i  ; j++){ 
    
                       setTimeout(function(){ 
                         document.getElementById('karmir').style.background="red"
                        }, 2000);
                       
                        setTimeout(function(){ 
                         document.getElementById('karmir').style.background="lightgrey"
                        }, 6000);
                       
                        setTimeout(function(){ 
                         document.getElementById('dexin').style.background="yellow"
                        }, 4000);
                       
                        setTimeout(function(){ 
                         document.getElementById('dexin').style.background="lightgrey"
                        }, 6000);           
           
             }
    }
    setTimeout(function(){
    return restart();
    }, 8000);
    }
    restart();