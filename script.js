function calcularTotal() {
	let total = 0;
	const productos = document.querySelectorAll("#productos table tr:not(:first-child)");

	productos.forEach(producto => {
		const cantidad = producto.querySelector("input[type='number']").value;
		const precio = producto.querySelector("td:nth-child(2)").textContent.slice(1);
		total += cantidad * precio;
	});

	document.querySelector("#total").textContent = total;
}

function enviarPago() {
	const nombre = document.querySelector("#nombre").value;
	const direccion = document.querySelector("#direccion").value;
	const email = document.querySelector("#email").value;
	const tarjeta = document.querySelector("#tarjeta").value;
	const vencimiento = document.querySelector("#vencimiento").value;
	const codigo = document.querySelector("#codigo").value;

	alert("Pago enviado con éxito");
}
var nombre = document.getElementById("nombre").value;
var direccion = document.getElementById("direccion").value;
var email = document.getElementById("email").value;

var tabla = document.getElementById("tabla-datos").getElementsByTagName("tbody")[0];
var nuevaFila = tabla.insertRow(tabla.rows.length);
var celdaNombre = nuevaFila.insertCell(0);
var celdaDireccion = nuevaFila.insertCell(1);
var celdaEmail = nuevaFila.insertCell(2);
celdaNombre.innerHTML = nombre;
celdaDireccion.innerHTML = direccion;
celdaEmail.innerHTML = email;