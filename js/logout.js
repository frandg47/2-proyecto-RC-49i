const btnIngreso = document.getElementById("btn-ingreso");
const DropUsuario = document.getElementById("dropdown-usuario");
const Logout = document.querySelector("#logout");
const li_Administracion = document.getElementById("li-Administracion");

//modifico navbar cuando sale usuario
Logout.addEventListener("click", () => {
    localStorage.removeItem("login_success");
    DropUsuario.classList.add("d-none");
    btnIngreso.classList.remove("d-none");
    li_Administracion.classList.add("d-none");

    //redirijo usuario a index cuando sale
    const location = window.location.href;
    if (location == "./index.html") {
        window.location.href = "./login.html";
    } else {
        window.location.href = "../html/login.html";
    }
});