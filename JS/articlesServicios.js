let trasmision = [];
let sustentabilidad = [];
let movilidad = [];
let productividad = [];
let containerTrasmision = document.getElementById("containerTrasmision");
let articlesSustentabilidad = document.getElementById("articlesSustentabilidad");
let articlesMovilidad = document.getElementById("articlesMovilidad");
let articlesProductividad = document.getElementById("articlesProductividad");
let articulosRelacionados = ["COVID 19","Conocimiento", "Tecnologia","Economia"]
let articulosRelacionados2 = ["Pandemia","Sustentabilidad", "Educacion","Enseñanaza"]
let articulosRelacionados3 = ["Contingencia","Movilidad academica","Educacion a distancia"]
let articulosRelacionados4 = ["Productividad","Indicadores de gestión", "Motivación en el trabajo","Evaluación del desempeño"]
  // En la URL que se mande lo de conectpares 
document.addEventListener("DOMContentLoaded",()=>{
    setArticles("Trasmision");
    setSustentabilidad('Sustentabilidad');
    setMovilidad('Movilidad');
    setProductividad('Productividad');
})

function getArticles(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
            trasmision.push(item);
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
    for (let item of trasmision) {
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

    containerTrasmision.appendChild(fragment);
  });
}

function getSustentabilidad(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
            sustentabilidad.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setSustentabilidad(category){
  getSustentabilidad(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of sustentabilidad) {
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

    articlesSustentabilidad.appendChild(fragment);
  });
}

function getMovilidad(category){
  return new Promise((resolve, reject) => {
    fetch(`PHP/Articles.php?category=${category}`)
      .then(response => response.json())
      .then(data => {
        for (item of data) {
            movilidad.push(item);
        }
        resolve();
      })
      .catch(error => {
        console.log('Error:', error);
        reject(error);
      });
  });
}

function setMovilidad(category){
  getMovilidad(category).then(() => {
    let fragment = new DocumentFragment();
    for (let item of movilidad) {
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

    articlesMovilidad.appendChild(fragment);
  });
}

function getProductividad(category){
    return new Promise((resolve, reject) => {
      fetch(`PHP/Articles.php?category=${category}`)
        .then(response => response.json())
        .then(data => {
          for (item of data) {
            productividad.push(item);
          }
          resolve();
        })
        .catch(error => {
          console.log('Error:', error);
          reject(error);
        });
    });
  }
  
  function setProductividad(category){
    getProductividad(category).then(() => {
      let fragment = new DocumentFragment();
      for (let item of productividad) {
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
                        <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados4[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                        </div>
                    </div>`
        articleDom.innerHTML = article;
  
        fragment.appendChild(articleDom)
      }
  
      articlesProductividad.appendChild(fragment);
    });
  }



// Empieza codigo de los filtros

let selectFilterT = document.querySelector('.form-selectT');

selectFilterT.addEventListener('change', function() {
  let filter = this.value;
  rendertrasmisionT(filter);
});

function rendertrasmisionT(filter){
  let filteredtrasmision;

  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredtrasmision = trasmision.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredtrasmision = trasmision.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Metodologia === 'Estudio de Caso Cualitativo ' );
      break;
    case 'Revisión bibliográfica':
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      break;
    case 'Argentina':
      // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredtrasmision = trasmision.filter(trasmisio => trasmisio.Pais === 'Peru');
      break;
    default:
      filteredtrasmision = trasmision;
  }

  let fragment = new DocumentFragment();
  for (let item of filteredtrasmision) { 
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
  containerTrasmision.innerHTML = '';
  containerTrasmision.appendChild(fragment);
}

//
let selectFilterS = document.querySelector('.form-selectS');

selectFilterS.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesS(filter);
});

function renderArticlesS(filter){
  let filteredArticles;

  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = sustentabilidad.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = sustentabilidad.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Metodologia === 'Estudio de Caso Cualitativo ');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'Colombia ');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'México');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = sustentabilidad.filter(sustentabilida => sustentabilida.Pais === 'Peru');
      break;
    default:
      filteredArticles = sustentabilidad;
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
  articlesSustentabilidad.innerHTML = '';
  articlesSustentabilidad.appendChild(fragment);
}

//
let selectFilterM = document.querySelector('.form-selectM');

selectFilterM.addEventListener('change', function() {
  let filter = this.value;
  renderArticlesM(filter);
});

function renderArticlesM(filter){
  let filteredArticles;

  switch(filter) {
    case '1':
      // Filtrar por número de citas
      filteredArticles = movilidad.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = movilidad.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = movilidad.filter(movilida => movilida.Metodologia === 'Estudio de Caso Cualitativo ');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = movilidad.filter(movilida => movilida.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = movilidad.filter(movilida => movilida.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredArticles = movilidad.filter(movilida => movilida.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = movilidad.filter(movilida => movilida.Pais === 'Peru');
      break;
    default:
      filteredArticles = movilidad;
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
  articlesMovilidad.innerHTML = '';
  articlesMovilidad.appendChild(fragment);
}


//
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
      filteredArticles = productividad.sort((a, b) => b.Num_Citas - a.Num_Citas);
      break;
    case '2':
      // Filtrar por año
      filteredArticles = productividad.sort((a, b) => b.Anio - a.Anio);
      break;
    case 'Estudio de Caso Cualitativo':
      filteredArticles = productividad.filter(productivid => productivid.Metodologia === 'Estudio de Caso Cualitativo ');
      break;
    case 'Revisión bibliográfica':
      filteredArticles = productividad.filter(productivid => productivid.Metodologia === 'Revisión bibliográfica');
      break;
    case 'Estudio Cuasi-Experimental':
      filteredArticles = productividad.filter(productivid => productivid.Metodologia === 'Estudio Cuasi-Experimental');
      break;
    case 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa':
      filteredArticles = productividad.filter(productivid => productivid.Metodologia === 'Estudio No Experimental Mediante Encuesta Basado en una Muestra Representativa');
      break;
    case 'Argentina':
      // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Argentina');
      break;
    case 'Chile':
        // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Chile');
      break;
    case 'Colombia':
        // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Colombia');
      break;
    case 'Cuba':
        // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Cuba');
      break;
    case 'Ecuador':
          // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Ecuador');
      break;
    case 'Mexico':
          // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Mexico');
      break;
    case 'Paraguay':
        // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Paraguay');
      break;
    case 'Peru':
        // Filtrar por país
      filteredArticles = productividad.filter(productivid => productivid.Pais === 'Peru');
      break;
    default:
      filteredArticles = productividad;
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
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados4[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  articlesProductividad.innerHTML = '';
  articlesProductividad.appendChild(fragment);
}

// Empieza la busqueda de articulos

let findA = document.getElementById("search_param");

findA.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = trasmision.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = trasmision.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
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
  containerTrasmision.innerHTML = '';
  containerTrasmision.appendChild(fragment);
});


let findB = document.getElementById("search_param2");

findB.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = sustentabilidad.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = sustentabilidad.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
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
  articlesSustentabilidad.innerHTML = '';
  articlesSustentabilidad.appendChild(fragment);
});


let findC = document.getElementById("search_param3");

findC.addEventListener('input', function(e) {
   //let terminoBusqueda = e.target.value;
  //let resultados = movilidad.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = movilidad.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
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
  articlesMovilidad.innerHTML = '';
  articlesMovilidad.appendChild(fragment);
});

let findD = document.getElementById("search_param4");

findD.addEventListener('input', function(e) {
  //let terminoBusqueda = e.target.value;
  //let resultados = productividad.filter(article => article.Titulo.includes(terminoBusqueda));
  let terminoBusqueda = e.target.value.toLowerCase();
  let resultados = productividad.filter(article => article.Titulo.toLowerCase().includes(terminoBusqueda));
  
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
                      <a href="https://www.connectedpapers.com/search?q=${articulosRelacionados4[randomNum]}" target="_blank"><img src="IMG/conecter.webp" alt="Articulos relacionados" class="iconC"></a>
                      </div>
                  </div>`
      articleDom.innerHTML = article;

      fragment.appendChild(articleDom)
    
  }
  articlesProductividad.innerHTML = '';
  articlesProductividad.appendChild(fragment);
});