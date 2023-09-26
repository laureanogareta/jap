const URL = "https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch(URL)
.then(respuesta => respuesta.json())
.then(info => {
    const h4 = document.querySelector("h4");
    const p = document.querySelector("p");
    const small = document.querySelector("small");
    const img = document.querySelector("img");

    h4.innerHTML = info[0].catID;
    p.innerHTML = info[0].catName;
    small.innerHTML = info[0].products;
    image.innerHTML = info[0].image;
})