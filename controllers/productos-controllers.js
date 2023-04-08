import {productosServicios} from "../servicios/productos-servicios.js";

console.log(productosServicios)

const nuevoProducto = (name,imageURL,price,id,category) => {
    const card = document.createElement('div');
    const contenido = `
    <div class="producto-box">
                    <img src="${imageURL}" alt="" class="producto-img">
                    <h2 class="producto-titulo">${name}</h2>
                    <span class="precio">${price}</span>
                    <a class="ver-producto" href="./productos.html?id=${id}">Ver Productos</a>
                    <i class='bx bxs-shopping-bag bolsa-add'></i>
                    <p class="categoria-producto">Categoria: ${category}</p>
                </div>`;

        card.innerHTML = contenido;
        card.dataset.id = id;

        return card;
}

const productos = document.querySelector('[data-product]');


productosServicios
.listaProductos()
    .then((data) => {
        data.forEach( perfil => {
            const nuevalinea = nuevoProducto(perfil.name,perfil.imageURL,perfil.price,perfil.id,perfil.category);
            productos.appendChild(nuevalinea);
        });
    })
    .catch((error) => alert("Ocurrió un error"));


