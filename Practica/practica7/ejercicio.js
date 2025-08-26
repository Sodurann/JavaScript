const peliculas = [
  {
    Titulo: "The Shawshank Redemption",
    anio: 1994,
    Poster: "https://m.media-amazon.com/images/I/81Qn+Ap33ZL._AC_SY679_.jpg",
    Genero: "Drama",
    Rating: 9.3,
    Descripcion:
      "Dos hombres encarcelados forman un vínculo durante varios años, encontrando consuelo y redención a través de actos de decencia común.",
  },
  {
    Titulo: "Inception",
    anio: 2010,
    Poster: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    Genero: "Acción, Ciencia Ficción",
    Rating: 8.8,
    Descripcion:
      "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos recibe la tarea inversa: implantar una idea en la mente de un CEO.",
  },
  {
    Titulo: "The Godfather",
    anio: 1972,
    Poster: "https://m.media-amazon.com/images/I/71I0s5pFjUL._AC_SY679_.jpg",
    Genero: "Crimen, Drama",
    Rating: 9.2,
    Descripcion:
      "El patriarca envejecido de una dinastía criminal organizada transfiere el control de su imperio clandestino a su hijo reacio.",
  },
  {
    Titulo: "Parasite",
    anio: 2019,
    Poster: "https://m.media-amazon.com/images/I/91V4Lz-jTfL._AC_SY679_.jpg",
    Genero: "Thriller, Drama",
    Rating: 8.6,
    Descripcion:
      "Una familia pobre pero astuta se infiltra en una familia rica al hacerse pasar por trabajadores altamente calificados, lo que lleva a consecuencias inesperadas.",
  },
  {
    Titulo: "Interstellar",
    anio: 2014,
    Poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    Genero: "Aventura, Drama, Ciencia Ficción",
    Rating: 8.6,
    Descripcion:
      "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar el futuro de la humanidad.",
  },
];
peliculas.forEach((pelicula) => {
  const contenedor = document.getElementById("contenedorTarjetas");
  contenedor.innerHTML += `  <div class="col">
    <div class="card">
      <img src="${pelicula.Poster}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${pelicula.Titulo}</h5>
        <p class="card-text">${pelicula.Descripcion}</p> 
      </div>
    </div>
  </div>
`;

});