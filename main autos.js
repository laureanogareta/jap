const URL = "https://japdevdep.github.io/ecommerce.api/category/all.json";
const button = document.getElementById("click")

function click(){
    fetch(URL)
    .then(respuesta => respuesta.json())
    .then(data => {
        const img = document.querySelector("img");
        img.src = data[0].url;
        const h4 = document.querySelector('h4');
        h4.innerHTML = data[0].id;
    })
}

button.onclick = click;
click();