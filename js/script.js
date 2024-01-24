/* SCRIPT ABOVE THE FOLD */

const heroParagraph = document.getElementById('hero-paragraph');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animate() {
    if (isElementInViewport(heroParagraph)) {
        heroParagraph.classList.add('slide-in-from-right');
    }
}

window.addEventListener('scroll', animate);

/* ------------------------------------------------------------------------------------------------ */

/* SCRIPT COMENTARIOS */

const comentArr = []

const comentForm = document.getElementById("comentForm")
const cardContainer = document.querySelector(".comentContainer")

const renderComent = () =>{
    cardContainer.innerHTML = ""
    for(const opinion of comentArr){
        cardContainer.innerHTML += `
        <div class="cardOpinion">
            <img class="cardImg" src="./img/useranonimous.png">
            <div>
                <h3>${opinion.nombre}:</h3>
                <p>"${opinion.coment}"</p>
            </div>
        </div>
        `
    }
}

comentForm.addEventListener("submit", (event) =>{
    event.preventDefault()
    comentArr.push({
        nombre: comentForm.nombre.value, 
        coment: comentForm.comentArea.value,
    })
    comentForm.reset()
    renderComent()
})

/* ------------------------------------------------------------------------------------------------ */

/* SCRIPT PREGUNTAS FRECUENTES */

let pregunta = document.querySelectorAll('.pregunta-frecuente');
let botonDer = document.querySelectorAll('.simb-der');
let respuesta = document.querySelectorAll('.respuesta-frecuente');
let parrafo = document.querySelectorAll('.respuesta-frecuente p');

for (let i = 0; i < botonDer.length; i = i + 1) {
    let altoparrafo = parrafo[i].clientHeight;
    let conttador = 0;

    botonDer[i].addEventListener('click', () => {
        if ( conttador == 0 ) {
            respuesta[i].style.height = `100px`;
            pregunta[i].style.marginBottom = '22px';
            botonDer[i].innerHTML = '<i>-</i>';
            conttador = conttador + 1
        }

        else if ( conttador == 1 ) {
            respuesta[i].style.height = `0`;
            pregunta[i].style.marginBottom = '0';
            botonDer[i].innerHTML = '<i class="bi bi-chevron-compact-down"></i>';
            conttador = conttador - 1
        }
    })
}

console.log(parrafo)

/* ------------------------------------------------------------------------------------------------ */

/* SCRIPT PRODUCTOS */

const productContainer = document.querySelector(".productContainer")

fetch("./database.json")    //Solicita el archivo .json mediante la función fetch()             
    .then(response => response.json())  //Cuando se reciba una respuesta (response) de fetch, convierte esa respuesta a formato JSON mediante la función .json(). 
    .then(data => {         //Cuando la conversión a JSON se complete, ejecuta una función que recibe el objeto JSON en formato JavaScript como argumento.
        for(const producto of data){        //Bucle de iteración
            productContainer.innerHTML +=   //Crea elementos HTML en el documento y los agrega al contenedor productContainer            
            ` 
            <div class="productCard">
                <img src=${producto.img}>
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>Marca: ${producto.marca}</p>
                    <p>Modelo: ${producto.modelo}</p>
                    <p>${producto.descripción}</p>
                    <p>ARS ${producto.precio}.00</p>
                </div>            
            </div>
            `
        }
    })
    
/* ------------------------------------------------------------------------------------------------ */

/* SCRIPT FORMULARIO CONTACTO */

contactForm.addEventListener("submit", (event) =>{
    event.preventDefault()                          //para que el btn submit no refresque la pág
    contactForm.reset()                             //resetea los campos
})


/* ------------------------------------------------------------------------------------------------ */