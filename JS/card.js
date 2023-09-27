let btn = document.querySelectorAll('.buttonLeermas');
let card = document.querySelectorAll('.cards');
let info = document.querySelectorAll('.dataInfo');

btn.forEach(element => {
    element.addEventListener('mouseover',(evento)=>{
        evento.target.querySelector('span').style.width = '100%';
    })
});


btn.forEach(element => {
    element.addEventListener('mouseout',(evento)=>{
        evento.target.querySelector('span').style.width = '0%';
    })
});


$('#btnAdriana').on( "click", function() {
    $('#modal-Adriana').modal('show');
});

$('#btnAngela').on( "click", function() {
    $('#modal-Angela').modal('show');
});

$('#btnAna').on( "click", function() {
    $('#modal-Ana').modal('show');
});

$('#btnCecilia').on( "click", function() {
    $('#modal-Cecilia').modal('show');
});

$('#btnAlejandra').on( "click", function() {
    $('#modal-Alejandra').modal('show');
});

$('#btnGuadalupe').on( "click", function() {
    $('#modal-Guadalupe').modal('show');
});

$('#btnAdrianaR').on( "click", function() {
    $('#modal-AdrianaR').modal('show');
});
$('#btnArturo').on( "click", function() {
    $('#modal-Arturo').modal('show');
});
$('#btnJose').on( "click", function() {
    $('#modal-Jose').modal('show');
});
$('#btnNoe').on( "click", function() {
    $('#modal-Noe').modal('show');
});
$('#btnBlanca').on( "click", function() {
    $('#modal-Blanca').modal('show');
});
$('#btnMyriam').on( "click", function() {
    $('#modal-Myriam').modal('show');
});
$('#btnJinny').on( "click", function() {
    $('#modal-Jinny').modal('show');
});
$('#btnDianey').on( "click", function() {
    $('#modal-Dianey').modal('show');
});
$('#btnMoises').on( "click", function() {
    $('#modal-Moises').modal('show');
});
/*
btn.forEach(element => {
    element.addEventListener('click', (evento)=>{
        if(evento.target.getAttribute('validation')=='false'){
            card[0].style.width='45%'
            card[0].style.height='340px'
            card[3].style.width='50%'
            evento.target.setAttribute('validation','true')
        }
        else if(evento.target.getAttribute('validation')=='true'){
            card[0].style.width='295px'
            card[0].style.height='200px'
            card[3].style.width='295px'
            evento.target.setAttribute('validation','false')
        }
            
    })
});

*/