const divLogin = document.getElementById("login");
const divRegistro = document.getElementById("registro");
const btnRegistrate = document.getElementById("btn-registro");

const cambioARegistro = () => {
    divLogin.classList.add("d-none");
    divLogin.classList.remove("d-block");
    divRegistro.classList.add("d-block");
    divRegistro.classList.remove("d-none");
}

const cambioALogin = () => {
    divRegistro.classList.add("d-none");
    divRegistro.classList.remove("d-block");
    divLogin.classList.add("d-block");
    divLogin.classList.remove("d-none");
}

btnRegistrate.addEventListener("click", () => {
    cambioARegistro();
})

