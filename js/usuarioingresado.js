const usuariosLogeado = JSON.parse(localStorage.getItem("login_success"));
const dropUsuario = document.getElementById("dropdown-usuario");
const dropNombre = document.getElementById("drop-nombre");
const dropEmail = document.getElementById("drop-correo");
const divIngreso = document.getElementById("btn-ingreso");
const liAdministracion = document.getElementById("li-Administracion");

const usuarios = JSON.parse(localStorage.getItem("usuarios"));
let usuarioAdmin = null;

if (usuarios && usuarios.length > 0) {
  usuarioAdmin = usuarios[0];
}

if (usuarioAdmin && usuariosLogeado && usuariosLogeado.length > 0) {
  let usuario = usuariosLogeado[0];

  if (
    usuarioAdmin.email === usuario.email &&
    usuarioAdmin.contraseña === usuario.contraseña
  ) {
    liAdministracion.style.display = "block";
  }

  dropUsuario.classList.remove("d-none");
  divIngreso.classList.add("d-none"); 

  dropNombre.textContent = usuario.nombre;
  dropEmail.textContent = usuario.email;
}

