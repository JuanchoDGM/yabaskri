const guardar = (clave,valor)=> {
    localStorage.setItem(clave,valor);
}

let nombreProducto = prompt("Ingrese el nombre del producto a guardar:");
let producto = parseInt(prompt("Ingresa el código del producto a guardar:"));

guardar(nombreProducto,producto);

if (valor == NaN) {
    document.write("El código del producto" + producto + " no es válido");
}
else if(valor < 0) {
    console.log("El valor del producto no puede ser negativo");    
}