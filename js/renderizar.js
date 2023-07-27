const producto = JSON.parse(localStorage.getItem('productos'));

// Comprobar si hay productos seleccionados en el Local Storage
if (producto && Array.isArray(producto)) {
  producto.forEach((producto) => {
    // Crear una nueva card con los datos del producto seleccionado
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
          <p>Precio: <span>${producto.precio}</span></p>
        </div>
        <div class="card-link">
          <a href="${producto.enlace}">Ver más</a>
        </div>
      </div>
    `;

    // Agregar la nueva card a la lista de cards existente
    const swiperContainer = document.querySelector('.swiper-wrapper');
    swiperContainer.appendChild(nuevaCard);
  });
}