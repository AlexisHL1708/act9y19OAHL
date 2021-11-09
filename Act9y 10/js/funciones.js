
new Vue({
  el: 'main',
  data: {
    mostar: '',
    buscarT: '',
    busqueda: '',
    minimo: 15,

    juegos: [{
      titulo: 'Bocina 15 FUSSION',
      genero: 'Bocina de 15 pulgadas',
      tamaño: 'Negro, gris',
      precio: 3500,
    },
    {
      titulo: 'Bocina 8 FUSSION',
      genero: 'Bocina de 8 pulgadas',
      tamaño: 'Negro',
      precio: 1500,
    },
    {
      titulo: 'Bocina 18 FUSSION',
      genero: 'Bocina de 18 pulgadas para graves',
      tamaño: 'Negro',
      precio: 3900,
    },
    {
      titulo: 'Bocina 15 KSR',
      genero: 'Bocina de 15 pulgadas',
      tamaño: 'Gris',
      precio: 3200,
    },
    {
      titulo: 'Bocina 8 KSR',
      genero: 'Bocina de 8 pulgadas',
      tamaño: 'Gris',
      precio: 1350,
    },
    {
      titulo: 'Bocina 18 KSR',
      genero: 'Bocina de 18 pulgadas para graves',
      tamaño: 'Gris',
      precio: 3500,
    },
    {
      titulo: 'Bocina portatil JBL',
      genero: 'Bocina portatil JBL FLIP 6',
      tamaño: 'Negro',
      precio: 1800,
    },
    {
      titulo: 'Bocina BEATS PILL',
      genero: 'Bocina portatil bluetooth Beats',
      tamaño: 'Negro, blanco, rosa, gris',
      precio: 3500,
    },
    {
      titulo: 'Bocina SAMSUNG',
      genero: 'Bocina portatil SAMSUNG contra agua',
      tamaño: 'Negro',
      precio: 2800,
    }],
  },
  computed: {
    mejoresJuegos() {
      return this.juegos.filter((juego) => juego.precio >= this.minimo);
    },
    buscarJuego() {
      return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));

    },
  }

})