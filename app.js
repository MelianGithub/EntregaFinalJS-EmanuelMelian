fetch('../productos.json')
  .then(response => response.json())
  .then((productos) => {

    const filtercard__container = document.querySelector("#filtercard__container");
    const botonesCategorias = document.querySelectorAll(".botones__categorias");
    const selectOrder = document.querySelector("#selectOrder");
    const priceMax = document.querySelector("#my-range");
    const linkLaptop = document.querySelector("#linkLaptop")




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
      let buscar = productos.filter((producto) => {
        return producto.marca.toLowerCase() == buscarItem.value.toLowerCase() ||
          producto.cat.toLowerCase() == buscarItem.value.toLowerCase() ||
          producto.cpu.toLowerCase() == buscarItem.value.toLowerCase()
      })
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

    // Agregar al carrito
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
      toa();
      // LOCAL STORAGE
      localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    }

    // Numero de Carrito
    const numerito = document.querySelector("#numerito")
    function actualizarNumerito() {
      let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
      numerito.innerText = nuevoNumerito;
    }

    // Productos en carrito
    let productosEnCarrito;
    let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoLS) {
      productosEnCarrito = JSON.parse(productosEnCarritoLS);
      actualizarNumerito();
    } else {
      productosEnCarrito = [];
    }

    // Toastify Notifications 
    function toa() {
      Toastify({
        text: "Agregaste un producto al carrito",
        duration: 1000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    }

    // Agregar Cat a botones
    function buscarCat(array) {
      botonesCategorias.forEach((boton) => {
        boton.addEventListener("click", (e) => {
          // filter.innerHTML = '';
          const buscados = array.filter(
            (producto) =>
              producto.cpu === e.currentTarget.id ||
              producto.cat === e.currentTarget.id ||
              producto.marca === e.currentTarget.id
          );
          cargarProductos(buscados);
          ordenadoPor(buscados);
          filtrarPrecio(buscados);
        });
      });
    }

    // Ordenar Por precio
    function ordenadoPor(array) {
      selectOrder.addEventListener("change", () => {
        const ordenadoPorPrecio = array.sort((a, b) => {
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
          cargarProductos(ordenadoPorPrecio);
        } else if (selectedOption.value == 2) {
          cargarProductos(ordenadoPorPrecio.reverse());
        }
      });
    };

    // FILTRAR RANGO PRECIOS
    function filtrarPrecio(arrayPrecios) {
      priceMax.max = "9000";
      priceMax.addEventListener("click", (e) => {
        const precioMaximo = arrayPrecios.filter(
          (producto) =>
            producto.precio <= e.currentTarget.value
        );
        console.log(e.currentTarget.value)
        cargarProductos(precioMaximo);
      })
    }
    cargarProductos(productos);
    filtrarPrecio(productos);
    ordenadoPor(productos);
    buscarCat(productos);

  })

