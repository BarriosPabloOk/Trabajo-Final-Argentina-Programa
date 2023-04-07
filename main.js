import {productos} from './data/data.js'

const containerProducts = document.getElementById("container-products");
let productsButtons ;



function loadProducts() {
    const fragmentProducts = document.createDocumentFragment()
    productos.map((product) => {
        const div = document.createElement('div')
        div.id = product.id
        div.className = "col-md-3 col-sm-3  product"
        div.innerHTML = `
            <img class=" img-fluid" src="${product.imagen}" alt="${product.titulo}" />
            <h4>${product.titulo}</h4>
            <p>Descripción del producto</p>
            <button id = '${product.id}-button'>Comprar</button>
        `
        fragmentProducts.appendChild(div)
    })
    containerProducts.append(fragmentProducts)
    
    
}

function getButtonsProducst() {
    const productsButtons = document.querySelectorAll('button')
    
    productsButtons.forEach((button) => {
        const mesage = `presionaste el boton ${button.id}`
        button.addEventListener('click', () => {console.log(mesage)})
    })
    
}


loadProducts()
getButtonsProducst()
console.log(productos.length)
