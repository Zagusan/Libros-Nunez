// Funcionalidad del carrito de compras
const carrito = [];

function agregarLibros(nombre, precio, cantidadId) {
    const elem = document.getElementById(cantidadId);
    if (!elem) {
        alert('No se encontró el campo de cantidad: ' + cantidadId);
        return;
    }
    const cantidadTexto = elem.value;
    const cantidad = parseInt(cantidadTexto);

    if (cantidadTexto === "" || cantidad <= 0) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    let existe = false;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            carrito[i].cantidad = carrito[i].cantidad + cantidad;
            existe = true;
            break;
        }
    }

    if(!existe) {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        });
    }

    alert("Libro agregado: " + nombre + " (Cantidad: " + cantidad + ")");
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    let mensaje = "Carrito de compras:\n\n";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        const libro = carrito[i];
        const subtotal = libro.precio * libro.cantidad;
        mensaje += libro.nombre + "\nCantidad: " + libro.cantidad + "\nPrecio: ₡" + libro.precio + "\nSubtotal: ₡" + subtotal + "\n\n";
        total += subtotal;
    }

    mensaje += "Total a pagar: ₡" + total;
    alert(mensaje);
}