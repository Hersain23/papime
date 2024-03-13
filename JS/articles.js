let articles = [];
let tics = [];
let vinculacion = [];
let containerArticles = document.getElementById("containerArticles");
let tabTICS = document.getElementById("tab2-tab");
let articlesTICS = document.getElementById("articlesTICS");
let articlesVinculacion = document.getElementById("articlesVinculacion");

let articulosRelacionados = ["Actividades academicas","Ciencias Básicas", "Educacion","Enseñanaza"]
let articulosRelacionados2 = ["TIC´s","COVID 19", "Universidades","Pandemia"]
articulosRelacionados3 = ["TIC´s","COVID 19", "Universidades","Pandemia"]
  // En la URL que se mande lo de conectpares 
document.addEventListener("DOMContentLoaded",()=>{
    setArticles("Creenciales Alternativas");
    setTICS('TICS')
    setVinculacion('Vinculacion')
})

function getArticles(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
          articles.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setArticles(category){
  getArticles(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of articles) {
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

    containerArticles.appendChild(fragment);
  });
}

function getTICS(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
          tics.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setTICS(category){
  getTICS(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of tics) {
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

    articlesTICS.appendChild(fragment);
  });
}

function getVinculacion(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
          vinculacion.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setVinculacion(category){
  getVinculacion(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of vinculacion) {
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

    articlesVinculacion.appendChild(fragment);
  });
}




// Empieza codigo de los filtros
let selectFilterC = document.querySelector('.form-selectC');

selectFilterC.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesC(filter);
});

function renderArticlesC(filter){
  let filteredArticles;
  let articleMuestra,articleNoMuestra;
  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = articles.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = articles.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = articles.filter(article => article.Metodologia === 'Estudio de Caso Cualitativo');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = articles.filter(article => article.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = articles.filter(article => article.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredArticles = articles.filter(article => article.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = articles.filter(article => article.Pais === 'Peru');
      break;
    default:
      filteredArticles = articles;
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
  containerArticles.innerHTML = '';
  containerArticles.appendChild(fragment);
}

let selectFilterT = document.querySelector('.form-selectT');

selectFilterT.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesT(filter);
});

function renderArticlesT(filter){
  let filteredArticles;
  let articleMuestra,articleNoMuestra;
  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = tics.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = tics.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = tics.filter(tic => tic.Metodologia === 'Estudio de Caso Cualitativo');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = tics.filter(tic => tic.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = tics.filter(tic => tic.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      articleMuestra = tics.filter(tic => tic.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      articleNoMuestra = tics.filter(tic => tic.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra No Representativa');
      filteredArticles = articleMuestra.concat(articleNoMuestra);
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = tics.filter(tic => tic.Pais === 'Peru');
      break;
    default:
      filteredArticles = tics;
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
  articlesTICS.innerHTML = '';
  articlesTICS.appendChild(fragment);
}


let selectFilterV = document.querySelector('.form-selectV');

selectFilterV.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesV(filter);
});

function renderArticlesV(filter){
  let filteredArticles;

  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = vinculacion.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = vinculacion.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = vinculacion.filter(vinculacio => vinculacio.Metodologia === 'Estudio de Caso Cualitativo');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = vinculacion.filter(vinculacio => vinculacio.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = vinculacion.filter(vinculacio => vinculacio.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredArticles = vinculacion.filter(vinculacio => vinculacio.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      break;
    case 'Argentina':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Argentina')
      })
      break;
    case 'Chile':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Chile')
      })
      break;
    case 'Colombia':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Colombia')
      })
      break;
    case 'Cuba':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Cuba')
      })
      break;
    case 'Ecuador':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Ecuador')
      })
      break;
    case 'Mexico':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Mexico')
      })
      break;
    case 'Paraguay':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Paraguay')
      })
      break;
    case 'Peru':
      filteredArticles = vinculacion.filter((vinculacio)=>{
        return vinculacio.Pais.includes('Peru')
      })
      break;
    default:
      filteredArticles = vinculacion;
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
  articlesVinculacion.innerHTML = '';
  articlesVinculacion.appendChild(fragment);
}

// Empieza la busqueda 
let findA = document.getElementById("search_param");

findA.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = articles.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = articles.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
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
  containerArticles.innerHTML = '';
  containerArticles.appendChild(fragment);
});

let findB = document.getElementById("search_param2");

findB.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = tics.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = tics.filter(tic => tic.Titulo.toLowerCase().includes(terminoBusqueda));
  
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
  articlesTICS.innerHTML = '';
  articlesTICS.appendChild(fragment);
});

let findC = document.getElementById("search_param3");

findC.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = vinculacion.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = vinculacion.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
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
  articlesVinculacion.innerHTML = '';
  articlesVinculacion.appendChild(fragment);
});