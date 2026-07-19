let randomColor = function () {
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i= 1; i <= 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
 let interValId ;
let startChangingColor = function(){
   function changeBg(){document.body.style.backgroundColor = randomColor();}
   
   if(!interValId){
    interValId = setInterval(changeBg,1000)
   } 
}


let stopChangingColor = function(){
    clearInterval(interValId);
    interValId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor)
document.querySelector("#stop").addEventListener("click", stopChangingColor)


