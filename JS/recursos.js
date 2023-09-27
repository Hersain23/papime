let arrowDown = document.getElementById("arrowDown")
let info = document.querySelectorAll(".info")
let contadorHome = 0;
arrowDown.addEventListener("click",()=>{
    
    info.forEach(element => {
        if(contadorHome == 0){
            element.style.height = "0px"
            contadorHome = 1;
        }
        else if(contadorHome == 1){
            element.style.height = "80px"
            contadorHome = 0;
        }
    });

})