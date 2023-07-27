const producto = JSON.parse(localStorage.getItem('productos'));

document.addEventListener('DOMContentLoaded', function () {
  // Obtener los elementos relevantes del DOM
  const categoryButtons = document.querySelectorAll('.btn-filter');
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  // Función para mostrar las tarjetas según la categoría seleccionada
  function mostrarTarjetasSegunCategoria(categoria) {
    // Limpiar el contenedor de tarjetas
    swiperWrapper.innerHTML = '';

    producto.forEach((producto) => {
      // Si la categoría seleccionada es "all" o el producto coincide con la categoría seleccionada, mostrar la tarjeta
      if (categoria === 'all' || producto.categoria === categoria) {
        const nuevaCard = document.createElement('div');
        nuevaCard.classList.add('swiper-slide');

        nuevaCard.innerHTML = `
        <img src="${producto.url}" alt="" class="product-image">
        <div class="card-description">
          <div class="card-title">
            <h4>${producto.nombre}</h4>
          </div>
          <div class="card-text">
            <p>${producto.descripcion}</p>
            <p>Precio: <span>US$${producto.precio}</span></p>
          </div>
          <div class="card-link">
            <a href="./html/error404.html">Ver más</a>
          </div>
        </div>
      `;
        swiperWrapper.appendChild(nuevaCard);
      }
    });
  }

  // Evento para detectar clics en los botones de categoría y mostrar las tarjetas según la categoría seleccionada
  categoryButtons.forEach((button) => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      const categoriaSeleccionada = this.getAttribute('data-filter');
      mostrarTarjetasSegunCategoria(categoriaSeleccionada);
    });
  });

  // Mostrar todas las tarjetas inicialmente (sin filtrar)
  mostrarTarjetasSegunCategoria('all');
});