let software = [];
let ciberseguridad = [];
let preservacion = [];
let containerSoftware = document.getElementById("containerSoftware");
let articlesCiberseguridad = document.getElementById("articlesCiberseguridad");
let articlesPreservacion = document.getElementById("articlesPreservacion");
let articulosRelacionados = ["Software","Software academico", "Educacion","proceso enseñanza aprendizaje"]
let articulosRelacionados2 = ["Ciberseguridad","e-learning", "Vulnerabilidades","Tecnologia"]
let articulosRelacionados3 = ["preservación digital","fondo fotográfico", "metadata","metadatos"]

  // En la URL que se mande lo de conectpares 
document.addEventListener("DOMContentLoaded",()=>{
    setSoftware("Software");
    setCiberseguridad('Ciberseguridad');
    setPreservacion('Preservacion');
})

function getSoftware(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
            software.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setSoftware(category){
  getSoftware(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of software) {
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    }

    containerSoftware.appendChild(fragment);
  });
}

function getCiberseguridad(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
            ciberseguridad.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setCiberseguridad(category){
  getCiberseguridad(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of ciberseguridad) {
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados2[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    }

    articlesCiberseguridad.appendChild(fragment);
  });
}

function getPreservacion(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
            preservacion.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setPreservacion(category){
  getPreservacion(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of preservacion) {
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados3[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    }

    articlesPreservacion.appendChild(fragment);
  });
}
 
// Empieza codigo de los filtros
let selectFilterS = document.querySelector('.form-selectS');

selectFilterS.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesS(filter);
});

function renderArticlesS(filter){
  let filteredArticles;
  let articleMuestra,articleNoMuestra;
  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = software.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = software.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = software.filter(article => article.Metodologia === 'Estudio de Caso Cualitativo');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = software.filter(article => article.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = software.filter(article => article.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      articleMuestra = software.filter(article => article.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      articleNoMuestra = software.filter(article => article.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra No Representativa');
      filteredArticles = articleMuestra.concat(articleNoMuestra);
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = software.filter(article => article.Pais === 'Peru');
      break;
    default:
      filteredArticles = software;
  }

  let fragment = new DocumentFragment();
  for (let item of filteredArticles) { 
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  containerSoftware.innerHTML = '';
  containerSoftware.appendChild(fragment);
}

let selectFilterC = document.querySelector('.form-selectC');

selectFilterC.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesC(filter);
});

function renderArticlesC(filter){
  let filteredArticles;

  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = ciberseguridad.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = ciberseguridad.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = ciberseguridad.filter(tic => tic.Metodologia === 'Estudio de Caso Cualitativo ');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = ciberseguridad.filter(tic => tic.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = ciberseguridad.filter(tic => tic.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredArticles = ciberseguridad.filter(tic => tic.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra No Representativa');
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = ciberseguridad.filter(tic => tic.Pais === 'Peru');
      break;
    default:
      filteredArticles = ciberseguridad;
  }

  let fragment = new DocumentFragment();
  for (let item of filteredArticles) { 
    let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados2[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  articlesCiberseguridad.innerHTML = '';
  articlesCiberseguridad.appendChild(fragment);
}


let selectFilterP = document.querySelector('.form-selectP');

selectFilterP.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesP(filter);
});

function renderArticlesP(filter){
  let filteredArticles;

  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = preservacion.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = preservacion.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Metodologia === 'Estudio de Caso Cualitativo ');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = preservacion.filter(vinculacio => vinculacio.Pais === 'Peru');
      break;
    default:
      filteredArticles = preservacion;
  }

  let fragment = new DocumentFragment();
  for (let item of filteredArticles) { 
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados3[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  articlesPreservacion.innerHTML = '';
  articlesPreservacion.appendChild(fragment);
}

// Empieza la busqueda de articulos

let findA = document.getElementById("search_param");

findA.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = software.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = software.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
  let fragment = new DocumentFragment();
  for (let item of resultados) { 
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  containerSoftware.innerHTML = '';
  containerSoftware.appendChild(fragment);
});

let findB = document.getElementById("search_param2");

findB.addEventListener('input', function(e) {
 //let terminoBusqueda = e.target.value;
  //let resultados = ciberseguridad.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = ciberseguridad.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
  let fragment = new DocumentFragment();
  for (let item of resultados) { 
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados2[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  articlesCiberseguridad.innerHTML = '';
  articlesCiberseguridad.appendChild(fragment);
});

let findC = document.getElementById("search_param3");

findC.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = preservacion.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = preservacion.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
  let fragment = new DocumentFragment();
  for (let item of resultados) { 
      let randomNum = Math.floor(Math.random() * 4) + 1;
      let articleDom = document.createElement("div");
      articleDom.classList.add("col","mTop","shadowBox","backgroundWhite");
      let article = `
                  <div class="myoverflow titlePaper pLeft" title="${item.URL}"><a href="${item.URL_Articulo}" class="paper" target="_blank">${item.Titulo}</a></div>
                  <div class="text-dark pLeft autorPaper"><b>Autor: </b>${item.Autores} </div>
                  <div class="text-dark pLeft"><b>Efectos:</b> ${item.Efectos} </div>
                  <div class="text-dark pLeft"><b>Intervencion: </b>${item.Intervencion} </div>
                  <div class="row pLeft">
                      <div class="text-dark pLeft"><b>Metodologia: </b>${item.Metodologia} </div>
                      <div class="text-dark pLeft"><b>Temporalidad: </b>${item.Temporalidad}</div>
                      <div class="text-dark pLeft"><b>Numero de citas: </b>${item.Num_Citas} <b> Año: </b>${item.Anio} <b> Pais: </b>${item.Pais}
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados3[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  articlesPreservacion.innerHTML = '';
  articlesPreservacion.appendChild(fragment);
});