// Array de productos
let productos = [
  {
    cat: "laptop",
    id: 1,
    marca: "Lenovo",
    modelo: "Legion 5 Pro",
    cpu: "INTEL",
    gpu: "RTX 3080",
    RAM: 12,
    disco: 500,
    precio: 2000,
    stock: 5,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg",
    

  },
  {
    cat: "laptop",
    id: 2,
    marca: "Lenovo",
    modelo: "Legion 9",
    cpu: "INTEL",
    gpu: "RTX 3050",
    RAM: 16,
    disco: 700,
    precio: 1200,
    stock: 5,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 3,
    marca: "Acer",
    modelo: "Nitro",
    cpu: "AMD",
    gpu: "RX 6000",
    RAM: 16,
    disco: 500,
    precio: 1050,
    stock: 5,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 4,
    marca: "Asus",
    modelo: "TUF",
    cpu: "INTEL",
    gpu: "RTX 2060",
    RAM: 32,
    disco: 1000,
    precio: 3000,
    stock: 10,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 5,
    marca: "Lenovo",
    modelo: "Alienware",
    cpu: "INTEL",
    gpu: "RXT 3080",
    RAM: 64,
    disco: 1500,
    precio: 1400,
    stock: 2,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 6,
    marca: "MSI",
    modelo: "GF63",
    cpu: "INTEL",
    gpu: "RXT 3050TI",
    RAM: 8,
    disco: 500,
    precio: 7000,
    stock: 5,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 7,
    marca: "MSI",
    modelo: "GF100",
    cpu: "INTEL",
    gpu: "RXT 3080TI",
    RAM: 24,
    disco: 100,
    precio: 800,
    stock: 0,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 8,
    marca: "Hp",
    modelo: "Victus",
    cpu: "INTEL",
    gpu: "RXT 2080",
    RAM: 32,
    disco: 100,
    precio: 1100,
    stock: 0,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 9,
    marca: "Asus",
    modelo: "Republic of Gamers",
    cpu: "AMD",
    gpu: "RXT 3080",
    RAM: 16,
    disco: 1500,
    precio: 500,
    stock: 0,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"

  },
  {
    cat: "laptop",
    id: 10,
    marca: "Asus",
    modelo: "Moder",
    cpu: "AMD",
    gpu: "RXT 1660",
    RAM: 8,
    disco: 1500,
    precio: 2500,
    stock: 1,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"
  },
  {
    cat: "laptop",
    id: 10,
    marca: "Dell",
    modelo: "Nose",
    cpu: "AMD",
    gpu: "RXT 1660",
    RAM: 8,
    disco: 1500,
    precio: 2600,
    stock: 4,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"
  },
  {
    cat: "laptop",
    id: 10,
    marca: "Dell",
    modelo: "Precision",
    cpu: "INTEL",
    gpu: "RXT 1660",
    RAM: 8,
    disco: 1500,
    precio: 900,
    stock: 1,
    descripcion: "Super Gaming Pc perfecta para jugar todos los juegos de pc del momento",
    img: "../imagenes/laptoplenovo1.jpg"
  },
  {
    cat: "monitor",
    id: 10,
    marca: "MSI",
    modelo: "Optix",
    precio: 269,
    stock: 4,
    descripcion: "Con su diseño sin bordes, este monitor te brinda la mejor experiencia de juego.",
    img: ".jpg"
},
  {
    cat: "monitor",
    id: 10,
    marca: "MSI",
    modelo: "Optix",
    precio: 119,
    stock: 4,
    descripcion: "Con su diseño sin bordes, este monitor te brinda la mejor experiencia de juego.",
    img: ".jpg"
},
  {
    cat: "monitor",
    id: 10,
    marca: "MSI",
    modelo: "Optix",
    precio: 300,
    stock: 4,
    descripcion: "Con su diseño sin bordes, este monitor te brinda la mejor experiencia de juego.",
    img: ".jpg"
},
  {
    cat: "monitor",
    id: 10,
    marca: "MSI",
    modelo: "Optix",
    precio: 269,
    stock: 4,
    descripcion: "Con su diseño sin bordes, este monitor te brinda la mejor experiencia de juego.",
    img: ".jpg"
},
  {
    cat: "monitor",
    id: 10,
    marca: "MSI",
    modelo: "Optix",
    precio: 249,
    stock: 4,
    descripcion: "Con su diseño sin bordes, este monitor te brinda la mejor experiencia de juego.",
    img: ".jpg"
},
  {
    cat: "monitor",
    id: 10,
    marca: "MSI",
    modelo: "Optix",
    precio: 300,
    stock: 4,
    descripcion: "Con su diseño sin bordes, este monitor te brinda la mejor experiencia de juego.",
    img: ".jpg"
},
  {
    cat: "monitor",
    id: 10,
    marca: "MSI",
    modelo: "Optix",
    precio: 500,
    stock: 4,
    descripcion: "Con su diseño sin bordes, este monitor te brinda la mejor experiencia de juego.",
    img: ".jpg"
},
// GRAFICAS
{
  cat: "grafica",
  id: 10,
  marca: "NVIDIA",
  modelo: "RTX 2060",
  precio: 700,
  stock: 3,
  descripcion: "Ideal para gaming",
  img: ".jpg"
},
{
  cat: "grafica",
  id: 10,
  marca: "NVIDIA",
  modelo: "RTX 2070",
  precio: 800,
  stock: 4,
  descripcion: "Ideal para gaming",
  img: ".jpg"
},
{
  cat: "grafica",
  id: 10,
  marca: "NVIDIA",
  modelo: "RTX 2080",
  precio: 900,
  stock: 1,
  descripcion: "Ideal para gaming",
  img: ".jpg"
},
{
  cat: "grafica",
  id: 10,
  marca: "RADEON",
  modelo: "RX 6700 XT",
  precio: 1050,
  stock: 1,
  descripcion: "Ideal para gaming",
  img: ".jpg"
},
{
  cat: "grafica",
  id: 10,
  marca: "RADEON",
  modelo: "RX 6400",
  precio: 900,
  stock: 6,
  descripcion: "Ideal para gaming",
  img: ".jpg"
},
{
  cat: "grafica",
  id: 10,
  marca: "RADEON",
  modelo: "RX 6500",
  precio: 750,
  stock: 12,
  descripcion: "Ideal para gaming",
  img: ".jpg"
},

];

// const buscarItemIndex = document.querySelector("#buscarIndex");
// buscarItemIndex.addEventListener("change", buscadorItemIndex);

// function buscadorItemIndex() {
//   const buscar = productos.filter(producto => {
//     return producto.stock > 0 && producto.marca.toLocaleLowerCase() === buscarItemIndex.value
//       || producto.modelo.toLocaleLowerCase() === buscarItemIndex.value;
//   });


//   console.log(buscar)

//   localStorage.setItem("productos-index", JSON.stringify(buscar))
// }


// renderizar();
function renderizar() {
  let contenedorProductos = document.getElementById("contenedorProductos");

  for (const producto of productos) {

    let unidades = "Agregar"
    if (producto.stock <= 0) {
      unidades = "Sin Stock"
    }

    let tarjetaProducto = document.createElement("div");
    tarjetaProducto.className = "card";

    tarjetaProducto.innerHTML = `
  <img src=${producto.img} class="card__img">
  <h3>${producto.marca}</h3>
  <p class = "text__card">${producto.descripcion} </p>
  <h4>$${producto.precio}</h4>
  <button class= "bt__comprar">${unidades}</button>
  `;
    contenedorProductos.append(tarjetaProducto);
  }
}

// pagina productos

const filtercard__container = document.querySelector("#filtercard__container");

function cargarProductos(arraryProductos) {
  filtercard__container.innerHTML = '';

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
    filtercard__container.append(mostrarProductos);
  }
  actualizarBotonesAgregar();
};

// funcion error
function error() {
  const mensajeError = document.createElement("div");
  filtercard__container.innerHTML = " ";
  mensajeError.innerHTML = `<h3>No se encontraron resultados</h3>`;

  filtercard__container.append(mensajeError);
}

// funcion buscar

const buscarItem = document.querySelector("#buscar");
buscarItem.addEventListener("change", buscadorItem);

function buscadorItem() {
  const buscar = productos.filter(producto => {
    return producto.stock > 0 && producto.marca.toLocaleLowerCase() === buscarItem.value
      || producto.modelo.toLocaleLowerCase() === buscarItem.value;
  });

  buscar.length > 0 ? cargarProductos(buscar) : error(); // ESTO ES LO MISMO QUE UN IF ELSE

}

// AGREGAR AL CARRITO

let botonesAgregar = document.querySelectorAll(".producto-agregar");

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id == idBoton);

  if (productosEnCarrito.some(producto => producto.id == idBoton)) {
    const index = productosEnCarrito.findIndex(producto => producto.id == idBoton)
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }
  actualizarNumerito();

  // LOCAL STORAGE
  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// Numero de Carrito
const numerito = document.querySelector("#numerito")

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}

// ------------------
let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

