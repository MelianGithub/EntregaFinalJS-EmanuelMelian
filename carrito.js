let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito__vacio");
const contenedorCarritoProductos = document.querySelector("#carrito__productos");
const contenedorCarritoAcciones = document.querySelector("#carrito__acciones");
const contenedorCarritoComprado = document.querySelector("#carrito__comprado");
const subtitulosCarrito = document.querySelector("#subtitulos__carrito");
const masBotones = document.querySelector("#masbotones");
const botonVaciar = document.querySelector("#limpiar__carrito")
const contenedorTotal = document.querySelector("#contenedorTotal")
const botonComprar = document.querySelector("#botonComprar")
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")




function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML = '';

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito__productos");
            div.innerHTML = `
                     <img src=${producto.img} class="card__img">
                    <h3>${producto.marca}</h3>
                     <h4>${producto.cantidad}</h4>
                    <p class = "text__card"></p>
                    <h4>$${producto.precio}</h4>
                    <p>$${producto.precio * producto.cantidad}</p>
                     <button class="carrito-producto-eliminar"><i class='bx bxs-trash'></i></button>
    `;
            contenedorCarritoProductos.append(div);
        });
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        masBotones.classList.add("disabled");
        subtitulosCarrito.classList.add("disabled")
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito)
function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

// comprar
// botonComprar.addEventListener("click", comprarCarrito)
// function comprarCarrito() {
//     productosEnCarrito.length = 0;
//     localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

// }