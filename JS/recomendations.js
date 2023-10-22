var nomTemas = ['Covid', 'Pobreza', 'Infraestructura','Tecnologia','Social']
var aleatorio = Math.random() * (4 + 1);
    aleatorio = Math.floor(aleatorio);
const apiUrl = `https://api.semanticscholar.org/graph/v1/paper/search?query=${'covid'}&offset=100&limit=5`;
var idTemas = [];

document.addEventListener('DOMContentLoaded', content())

function content(){
    getIdRecomendations()
    let load = document.querySelector('.load')
    load.style.display = 'none'
}

function getIdRecomendations(){
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json(); 
  })
  .then(data => {
    console.log('Papers', data);
    idTemas.push(data)
  })
  .catch(error => {
    console.error('Error al obtener papers relacionados', error);
  });
}

function getRecomendatios(){

    
}