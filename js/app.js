const admin = {
    nombre: "admin",
    apellido: "admin",
    email: "admin@admin.com",
    contraseña: "Admin123",
};

let arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
arrayUsuarios[0] = admin;
localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));

const auto1 = {
    codigo: "A01",
    nombre: "AMG GT",
    precio: "40000",
    categoria: "Deportivo",
    descripcion: "Consumo de combustible en el ciclo mixto: 12.73 km/l. Emisiones de CO₂ en ciclo mixto: 182g/km.",
    url: "./assets/card.png",
}

const auto2 = {
    codigo: "A02",
    nombre: "A 250 Hatchback",
    precio: "35000",
    categoria: "Hatchback",
    descripcion: "Consumo de combustible en el ciclo mixto: 11.5 l/100km. Emisiones de CO₂ en ciclo mixto: 130g/km.",
    url: "./assets/card2.png",
}

const auto3 = {
    codigo: "A03",
    nombre: "GLC",
    precio: "20000",
    categoria: "SUV",
    descripcion: "Consumo de combustible en el ciclo mixto: 7,7 l/100 km. Emisiones de CO₂ en el ciclo mixto: 175g/km.",
    url: "./assets/card3.png",
}

const auto4 = {
    codigo: "A04",
    nombre: "Sprinter",
    precio: "70000",
    categoria: "SUV",
    descripcion: "Consumo de combustible en el ciclo mixto: 11,2 l/100km. Emisiones de CO₂ en el ciclo mixto: 297g/km.",
    url: "./assets/card4.png",
}

let arrayProductosIniciales = JSON.parse(localStorage.getItem("productos")) || [];
arrayProductosIniciales[0] = auto1;
arrayProductosIniciales[1] = auto2;
arrayProductosIniciales[2] = auto3;
arrayProductosIniciales[3] = auto4;
localStorage.setItem("productos", JSON.stringify(arrayProductosIniciales));