const filter = document.querySelector("#filter");
const botonesCategorias = document.querySelectorAll(".botones__categorias");
const mayorAmenor = document.querySelector("#este");

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        const buscar = productos.filter(producto => producto.cpu === e.currentTarget.id || producto.cat === e.currentTarget.id || producto.marca === e.currentTarget.id);

        cargarProductosFilter(buscar);
    }

    )
});



const buscarOrdenado = buscar.sort((a, b) => a.precio - b.precio);
console.log(buscarOrdenado)

// ordenar por precio

//  buscar.sort((a, b) => {
//         return a.precio - b.precio;
//     });







// FILTRAR RANGO PRECIOS
// const botonesRango = document.querySelectorAll(".botones__rango");
// const rango1 = productos.precio > 100;
// console.log(rango1);

// botonesRango.forEach(boton => {
//     boton.addEventListener("click", (e) => {

//         const rango = productos.filter(producto => producto. == e.currentTarget.id);
//         cargarProductosFilter(rango);
//     })

// });


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

