

let hrs=document.getElementById("hours");
let min=document.getElementById("minutes");
let sec=document.getElementById("seconds");

 let maridiem=hrs>=12 ? "PM":"AM";

setInterval(()=>{
    let currentTime=new Date();

hrs.innerHTML=currentTime.getHours().toString().padStart(2,0);


min.innerHTML=currentTime.getMinutes().toString().padStart(2,0);;
sec.innerHTML=currentTime.getSeconds().toString().padStart(2,0);;

},1000)

