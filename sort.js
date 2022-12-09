let atr = [
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
  
    }
]

atr.sort((a, b) => {
    return a.precio - b.precio;
});

console.log(atr)
