const usuarios2 = JSON.parse(localStorage.getItem("usuarios"));
const usuariosLogeado2 = JSON.parse(localStorage.getItem("login_success"));

if (!usuariosLogeado2) {
  console.log(
    "Error: Local storage items 'usuarios' or 'login_success' not found."
  );
  window.location.href = "../index.html";
} else {
  const usuario = usuarios2[0];
  const usuarioLogeado = usuariosLogeado2[0];

  if (
    usuario.email !== usuarioLogeado.email &&
    usuario.contraseña !== usuarioLogeado.contraseña
  ) {
    window.location.href = "../index.html";
  }
}