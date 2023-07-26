const obtenerUsuarios = JSON.parse(localStorage.getItem("usuarios"))
const tablaUsuarios = document.getElementById("tablaUsuarios")



obtenerUsuarios.forEach((usuario) => {
    const fila = `
  <tr id="fila-${usuario.email}">
    <th scope="row">${usuario.nombre}</th>
    <td>${usuario.email}</td>
    <td>${usuario.contraseña}</td>
    <td>
      <button class="btn btn-outline-secondary eliminarusuario" data-correo="${usuario.email}">Borrar</button>
    </td>
  </tr>
  `;

    tablaUsuarios.innerHTML += fila;
});


tablaUsuarios.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminarusuario")) {
        const correo = e.target.dataset.correo
        const usuario = obtenerUsuarios.find((usuario) => usuario.email === correo)

        swal({
            title: "Está seguro de que desea borrar este producto?",
            text: "Una vez borrado no puede recuperarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const indexusuarios = obtenerUsuarios.indexOf(usuario);
                if (indexusuarios > -1) {
                    obtenerUsuarios.splice(indexusuarios, 1);
                }
                localStorage.setItem("usuarios", JSON.stringify(obtenerUsuarios));
                const fila = document.getElementById(`fila-${correo}`)
                fila.remove()
                swal("El usuario fue eliminado exitosamente", {
                    icon: "success",
                });
            } else {
                swal("El usuario no fue eliminado");
            }
        });

    }
})