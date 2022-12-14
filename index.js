const contenedorOfertas = document.querySelector("#contenedor__ofertas")

// Renderizar productos en oferta
fetch('productos.json')
    .then(response => response.json())
    .then((productos) => {

        mostrarOfertas(productos)

    });

// Mostrar productos en oferta
function cargarOfertas(arrayProductos) {
    contenedorOfertas.innerHTML = '';
    for (const producto of arrayProductos) {

        let unidades = "Agregar"
        if (producto.stock <= 0) {
            unidades = "Sin Stock"
        }

        const ofertas = document.createElement("div");
        ofertas.className = "card";
        ofertas.innerHTML = `
  <img src=${producto.imgindex} class="card__img">
  <h3>${producto.marca}</h3>
  <p class = "text__card"></p>
  <h4>$${producto.precio}</h4>
  <button class= "producto-agregar" id="${producto.id}">${unidades}</button>
`;
        contenedorOfertas.append(ofertas);
    }
    actualizarBotonesAgregar();
}

function mostrarOfertas(array) {
    let enOferta = array.filter(
        (producto) => {
            return producto.oferta === true;
        })

    enOferta.length > 0 ? cargarOfertas(enOferta) : alert("no")
}

