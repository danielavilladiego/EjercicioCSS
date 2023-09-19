url_API = 'https://api.unsplash.com/search/photos?query=india&per_page=20&client_id=hmQAqaX5zkF01a80VCI61WKlTt-sWXdhMh2QGl7mCk4';
galeria = document.querySelector("div.galeria")

// Realizar una solicitud GET con fetch
fetch(url_API)
  .then(function(response) {
    if (response.ok) {
      // La solicitud fue exitosa, obtener el contenido de la respuesta
      return response.json();
    } else {
      // La solicitud no fue exitosa, manejar el error aquí
      console.error('Error: La solicitud no fue exitosa');
    }
  })
  .then(data =>  {
    data.results.forEach(posicion => {
          // Crear un nuevo elemento <img> para traer las imagenes
        let imagen = document.createElement('img');
        imagen.classList.add('estilo');
        // Establecer el atributo src
        imagen.src = posicion.urls.regular;
        let contenedor = document.createElement('div');
        contenedor.classList.add('contenedor-image');
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        let texto = document.createElement('p');
        texto.classList.add('descripcion');
        texto.textContent = posicion.alt_description;
        // Agregar el nuevo elemento al elemento de destino
        overlay.appendChild(texto);
        contenedor.appendChild(overlay);
        contenedor.appendChild(imagen);
        galeria.appendChild(contenedor);
    });
    
  })
  .catch(function(error) {
    // Manejar cualquier error de red o de otro tipo
    console.error('Error: ' + error);
  });
