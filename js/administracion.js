import { arraynumeros, Numerorandom } from "./numerorandom.js";

//Inicio script de bootstrap para validar el formulario
(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    document
                        .getElementById("id-form")
                        .addEventListener("submit", function (event) {
                            event.preventDefault();
                        });
                } else {
                    event.preventDefault();
                    //Inicio alerta de sweet alert
                    swal({
                        title: "Producto Cargado",
                        text: "Su producto fue cargado exitosamente",
                        icon: "success",
                        button: "ok",
                    });
                    Numerorandom();
                    crearproducto();
                    agregarproducto();
                    formularioproductos.reset();
                    //Fin alerta de sweet alert
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();
//Fin script de bootstrap para validar el formulario

let productos = [];

const listaProductos = document.getElementById("listadeproductos");
let codigocategoria = document.getElementById("categoria");
let codigoNombre = document.getElementById("nombreProducto");
let codigoPrecio = document.getElementById("precio");
let codigoDescripcion = document.getElementById("descripcion");
let codigoURL = document.getElementById("url");
let formularioproductos = document.getElementById("id-form");


formularioproductos.addEventListener("input", function () {
    const valorNombre = codigoNombre.value.trim();
    const valorPrecio = codigoPrecio.value.trim()
    const valorDescripcion = codigoDescripcion.value.trim()
    const patronLetras = /^[a-zA-Z]+(\s[a-zA-Z]+)?$/;
    const patronNumeros = /^[0-9]*$/

    if (valorNombre.length < 5 || valorNombre.length > 20 || !patronLetras.test(valorNombre)) {
        codigoNombre.setCustomValidity("El nombre debe tener al menos 5 caracteres");
    } else {
        codigoNombre.setCustomValidity("");
    }

    if (valorPrecio.length < 1 || valorPrecio.length > 12 || !patronNumeros.test(valorPrecio)) {
        codigoPrecio.setCustomValidity("a")
    } else {
        codigoPrecio.setCustomValidity("")
    }
    if (valorDescripcion.length < 25 || valorDescripcion.length > 200) {
        codigoDescripcion.setCustomValidity("a")
    } else {
        codigoDescripcion.setCustomValidity("")
    }
});



function crearproducto() {
    const nombre = codigoNombre.value;
    const descripcion = codigoDescripcion.value;
    const url = codigoURL.value;
    const categoria = codigocategoria.value;
    let codigonumber = arraynumeros[arraynumeros.length - 1];
    let codigo = codigonumber.toString();
    const precio = codigoPrecio.value;

    let codigoProducto = document.getElementById("codigoProducto");

    codigoProducto.disabled = false;

    if (codigoProducto.value !== "") {
        codigo = codigoProducto.value;
    }

    codigoProducto.disabled = true;

    const productos2 = {
        codigo,
        nombre,
        precio,
        categoria,
        descripcion,
        url,
    };

    const index = productos.findIndex(
        (producto) => producto.codigo === productos2.codigo
    );

    if (productos.some((producto) => producto.codigo === productos2.codigo)) {
        productos[index] = productos2; // Actualiza el objeto en el array productos
        localStorage.setItem("productos", JSON.stringify(productos)); // Actualiza el Local Storage
        console.log("El producto ha sido actualizado");
    } else {
        productos.push(productos2);
        localStorage.setItem("productos", JSON.stringify(productos));
        console.log("El producto ha sido agregado");
    }
    const formulario = document.getElementById("id-form");

    const modal = bootstrap.Modal.getInstance(formulario.closest(".modal"));
    modal.hide();
}

function agregarproducto() {
    listaProductos.querySelector("tbody").innerHTML = "";

    productos.forEach((producto) => {
        const tr = document.createElement("tr");
        tr.id = `${producto.codigo}`;
        tr.innerHTML = `
    <th scope="row">${producto.codigo}</th>
    <td>${producto.categoria}</td>
    <td>${producto.nombre}</td>
    <td>$${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td>${producto.url}</td>
    <td>
    <div class="col-md">
    <button class="btn btn-outline-secondary editar" data-codigo="${producto.codigo}" data-bs-toggle="modal"
    data-bs-target="#modal">Editar</button>
    </div>
    <button class="btn btn-outline-secondary eliminar mt-2" data-codigo="${producto.codigo}" class="btn btn-outline-secondary">Borrar</button>
    </td>
    `;
        listaProductos.querySelector("tbody").appendChild(tr);
    });
    localStorage.setItem("productos", JSON.stringify(productos));
}

const obtenerProductos = localStorage.getItem("productos");

if (obtenerProductos) {
    productos = JSON.parse(obtenerProductos);
    agregarproducto();
}

localStorage.setItem("productos", JSON.stringify(productos));
listaProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("editar")) {
        const id = e.target.dataset.codigo;
        const producto = productos.find((producto) => producto.codigo === id);

        if (producto) {
            document.getElementById("codigoProducto").value = producto.codigo;
            document.getElementById("categoria").value = producto.categoria;
            document.getElementById("nombreProducto").value = producto.nombre;
            document.getElementById("precio").value = producto.precio;
            document.getElementById("descripcion").value = producto.descripcion;
            document.getElementById("url").value = producto.url;


            localStorage.setItem("productos", JSON.stringify(productos));

            formularioproductos.dataset.mode = "editar";
            formularioproductos.dataset.editId = id;
        }
    }
});

listaProductos.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        const id = e.target.dataset.codigo;
        const producto = productos.find((producto) => producto.codigo === id);

        swal({
            title: "Está seguro de que desea borrar este producto?",
            text: "Una vez borrado no puede recuperarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                const index2 = productos.indexOf(producto);
                if (index2 > -1) {
                    productos.splice(index2, 1);
                }
                localStorage.setItem("productos", JSON.stringify(productos));
                const elemento = document.getElementById(id);
                elemento.parentNode.removeChild(elemento);
                swal("El producto fue eliminado exitosamente", {
                    icon: "success",
                });
            } else {
                swal("El producto no fue eliminado");
            }
        });
    }
});

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