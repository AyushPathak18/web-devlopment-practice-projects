var istatus =document.querySelector('h5');

var add=document.querySelector('#add');
var flag=0;
add.addEventListener("click",function(){
    
    if(flag==0){
        istatus.innerHTML="Friends";
        istatus.style.color="green";
        add.innerHTML="remove";
        add.style.backgroundColor="grey";
        flag=1;
    }
    else{
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        add.innerHTML="Add a Freind";
        add.style.backgroundColor="cadetblue";
        flag=0;

    }
})

