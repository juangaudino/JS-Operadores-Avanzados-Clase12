/**
 * @author Juan Gaudino
 * @version 1.0.0
 * @description 1er. Entrega Proyecto Final JavaScript - Clase 03 - Coderhouse
 * 
 * History
 *  1.0.0 - 2022-02-23 : Juan Gaudino : Mostrar en consola si el alumno esta aprobado o no
 */

// Declaración de valores unitarios

const unitarioPAI = 1200;
const unitarioCPM = 200;

const demasiaCalculada = (demasia) => {
    return (demasia/100) +1;
}
const totalPapel = (demasiaCalculada, motivos) => {
    return (demasiaCalculada * motivos * cantidad);
}

let material = "";
let cantidad = 0;
let precio = 0;



// Declaración de funciones


calcularPrecio = (material, totalPapel) => {
    let precio = 0;
    switch (material) {
        case 'PAI':
            precio = totalPapel * unitarioPAI;
            break;
        case 'CPM':
            precio = totalPapel * unitarioCPM;
            break;
    }
    return precio;
}


// Solicitud de datos


function papel() {
    let papelElegido = document.getElementById("papelElegido").value;
    cantidad = document.getElementById("cantidad").value;
    motivos = document.getElementById("motivos").value;
    demasia = document.getElementById("demasia").value;
    papelElegido === "PAI" ? pai() : cpm();    
}

function pai() {
    let material = 'PAI';
    let demasiaCalculada = (demasia/100) +1;
    let totalPapel = (demasiaCalculada * motivos * cantidad);
    precio = calcularPrecio(papelElegido, totalPapel);
    console.log(totalPapel);
    document.getElementById("papel").innerHTML = `El costo de producción de ${totalPapel} PPL es de $${calcularPrecio(material, totalPapel)}. <br> Click para cotizar de nuevo <br>`;
    document.getElementById("imagenMostrada").src = `./img/ppl.jpg`;
    return material;
}

function cpm() {
    let material = 'CPM';
    let demasiaCalculada = (demasia/100) +1;
    let totalPapel = (demasiaCalculada * motivos * cantidad);
    precio = calcularPrecio(papelElegido, totalPapel);
    console.log(totalPapel);
    document.getElementById("papel").innerHTML = `El costo de producción de ${totalPapel} CPM es de $${calcularPrecio(material, totalPapel)}. <br> Click para cotizar de nuevo <br>`;
    document.getElementById("imagenMostrada").src = `./img/cpm.jpg`;
    return material;
}





// Creación de objetos

class Producto {
    constructor(titulo, precio, cantidad) {
        this.titulo = titulo;
        this.precio = precio;
        this.cantidad = cantidad;
        // this.agregarAlCarrito = function () {
        //     carrito.push(this);
        // console.log(`${this.titulo} agregado al carrito`);
        };
// }
}

const PRODUCTO = new Producto(material, calcularPrecio, cantidad);

// Array de Productos

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];
const arrayProductos = [
    { id: 1, titulo: material, precio: precio, cantidad},
    { id: 2, titulo: material, precio: precio, cantidad},
];

agregarAlCarrito(arrayProductos[0, 1]);
console.log(carrito);

arrayProductos.forEach(productoEnCarrito => {
    console.log(productoEnCarrito)
});
    
// agregarAlCarrito(arrayProductos[0]);
// console.log(carrito);


// console.log("Esto devuelve el length del array: " + arrayProductos.length);
// for (let i = 0; i < arrayProductos.length; i++) {
//     console.log(arrayProductos[i]);
// }

// Carrito

// carrito.push(agregarAlCarrito);
// alert(`${PRODUCTO.titulo} agregado al carrito`);
// console.log(carrito);

// const indiceDelProducto = carrito.indexOf(PRODUCTO);
// console.log(indiceDelProducto);




