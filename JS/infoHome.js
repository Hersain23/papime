let btnInfo = document.getElementById("btnBeneficios")
let infoHome = document.querySelector(".infoHome")
let contadorHome = 0;

btnInfo.addEventListener('click',()=>{
    if(contadorHome == 0){
    infoHome.style.height = "255px"
    contadorHome = 1;
    btnInfo.innerHTML = "Leer menos"
    }
    else if(contadorHome == 1){
        infoHome.style.height = "110px"
        contadorHome = 0;
        btnInfo.innerHTML = "Leer más"
    }
})