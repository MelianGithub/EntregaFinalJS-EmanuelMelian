const filter = document.querySelector("#filter");
const botonesCategorias = document.querySelectorAll(".botones__categorias");
const selectOrder = document.querySelector("#selectOrder");
const priceMax = document.querySelector("#my-range");





botonesCategorias.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        const buscados = productos.filter(
            (producto) =>
                producto.cpu === e.currentTarget.id ||
                producto.cat === e.currentTarget.id ||
                producto.marca === e.currentTarget.id
        );

        cargarProductosFilter(buscados);
        filtrarPrecio(buscados);


        selectOrder.addEventListener("change", () => {

            const ordenadoPorPrecio = buscados.sort((a, b) => {
                if (a.precio < b.precio) {
                    return 1
                } else if (a.precio > b.precio) {
                    return -1
                } else {
                    return 0
                }

            });



            let selectedOption = selectOrder.options[selectOrder.selectedIndex];

            if (selectedOption.value == 1) {
                console.log('Selected option: ' + selectedOption.value);
                cargarProductosFilter(buscados);
            } else if (selectedOption.value == 2) {
                cargarProductosFilter(buscados.reverse());
            }

        });

    });

});


// FILTRAR RANGO PRECIOS

function filtrarPrecio(arrayPrecios) {
    priceMax.max = "9000";
    priceMax.addEventListener("click", (e) => {
        const precioMaximo = arrayPrecios.filter(
            (producto) =>
                producto.precio <= e.currentTarget.value
        );
        console.log(e.currentTarget.value)
        cargarProductosFilter(precioMaximo);
    })
}

function cargarProductosFilter(arraryProductos) {
    filter.innerHTML = '';

    for (const producto of arraryProductos) {

        let unidades = "Agregar"
        if (producto.stock <= 0) {
            unidades = "Sin Stock"
        }

        const mostrarProductos = document.createElement("div");
        mostrarProductos.className = "card";
        mostrarProductos.innerHTML = `
      <img src=${producto.img} class="card__img">
      <h3>${producto.marca}</h3>
      <p class = "text__card">${producto.descripcion} </p>
      <h4>$${producto.precio}</h4>
     <button class= "producto-agregar" id="${producto.id}">${unidades}</button>
    `;
        filter.append(mostrarProductos);
    }
    actualizarBotonesAgregar();
};
