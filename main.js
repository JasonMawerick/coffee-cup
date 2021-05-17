let drink ='café';
let tea= 'vert';
const cup=document.getElementById('cup');
cup.addEventListener('click',function(){
    if (drink=='café'){

cup.innerHTML='la tasse contient du '+drink+'<br>je bois le '+drink;
drink='thé';
    }
    else if ( drink=='thé'){
      
        if (tea=='vert'){
            cup.innerHTML='la tasse contient du '+drink+' '+tea+'<br>je bois le '+drink;
            tea='noir';
        }
        else{
            cup.innerHTML='la tasse contient du '+drink+' '+tea+'<br>je ne bois pas le '+drink;
           drink='café' ;
            
           tea='vert';
            
            

        }
        
        
       }

    
})