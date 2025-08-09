// 📝 Ejercicio 1
// =====================
// Crear un objeto llamado "producto" con las propiedades: nombre, precio y stock.
// Mostrar el nombre y el stock por consola usando desestructuración.

let producto = {
    nombre: "Papas",
    precio: 1200,
    stock: 200
}
const { nombre, precio, stock } = producto;

console.log ("Nombre:", nombre);
console.log ("Stock:", stock);