const btnIngreso = document.getElementById("btn-ingreso");
const DropUsuario = document.getElementById("dropdown-usuario");
const Logout = document.querySelector("#logout");

//modifico navbar cuando sale usuario
Logout.addEventListener("click", () => {
    localStorage.removeItem("login_success");
    DropUsuario.classList.add("d-none");
    btnIngreso.classList.remove("d-none"); 
    // liAdministracion.style.display = "none";

    //redirijo usuario a index cuando sale
    const location = window.location.href;
    if (location === "./index.html") {
        window.location.href = "./html/login.html";
    } else {
        window.location.href = "../html/login.html";
    }
});