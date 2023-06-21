const valorCuenta = Number(prompt("¿Cuanto es el valor de la cuenta?:")); 

const propina = valorCuenta >= 100 && valorCuenta <= 800 ? valorCuenta * 0.15: valorCuenta * 0.2; 
const totalPagar = valorCuenta + propina

console.log(`el consumo fue de $${valorCuenta}, la propina es de ${propina} y el total a pagar es $${totalPagar}`)



