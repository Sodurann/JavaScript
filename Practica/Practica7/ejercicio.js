const peliculas = [
  {
    Titulo: "The Shawshank Redemption",
    anio: 1994,
    Poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_p_v13_ap.jpg",
    Genero: "Drama",
    Rating: 9.3,
    Descripcion:
      "Dos hombres encarcelados forman un vínculo durante varios años, encontrando consuelo y redención a través de actos de decencia común.",
  },
  {
    Titulo: "Inception",
    anio: 2010,
    Poster: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    Genero: "Acción, Ciencia Ficción",
    Rating: 8.8,
    Descripcion:
      "Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos recibe la tarea inversa: implantar una idea en la mente de un CEO.",
  },
  {
    Titulo: "The Godfather",
    anio: 1972,
    Poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSvXz9V8-FTq5pcYq174jN2dqferGxWFa0OS1o7j_54CUrRC-ui9jrRN2Q1-yXQmJadM&usqp=CAU",
    Genero: "Crimen, Drama",
    Rating: 9.2,
    Descripcion:
      "El patriarca envejecido de una dinastía criminal organizada transfiere el control de su imperio clandestino a su hijo reacio.",
  },
  {
    Titulo: "Interstellar",
    anio: 2014,
    Poster: "https://pics.filmaffinity.com/Interstellar-366875261-large.jpg",
    Genero: "Aventura, Drama, Ciencia Ficción",
    Rating: 8.6,
    Descripcion:
      "Un grupo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar el futuro de la humanidad.",
  },
];
peliculas.forEach((pelicula) => {
  const contenedor = document.getElementById("contenedorTarjetas");
  contenedor.innerHTML += `  <div class="col">
    <div class="card bg-black text-light">
      <img src="${pelicula.Poster}" height="800dvh" class="card-img-top " alt="Poster de ${pelicula.Titulo}">
      <div class="card-body">
        <h5 class="card-title">${pelicula.Titulo}</h5>
        <p class="card-text">${pelicula.Descripcion}</p> 
      </div>
    </div>
  </div>
`;

});