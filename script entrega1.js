const URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';
const button = document.getElementById("click");
const listado = document.getElementById("listado");
const categoria = document.getElementById("categoria");
const contenido = document.getElementById("contenido");

function clic(){
    fetch(URL)
    .then((resp) => resp.json())
    .then((data) => {
    const img = document.querySelector('img');
    img.src = data[0].url;
    h4.textContent = data[0].id;
    })
}

button.onclick = clic;
clic();