// declaramos el array
const arr = [0,13,14,3]
// se declara la funcion para que realize la operacion de numeros primos
var primo = (n) => {
    if (n === 1) {
        return false
    } else if (n === 2) {
        return true
    } else {
        for (let i = 2; i < n; n++) {
            if (n % i === 0) return false
        }
    }
    return true;
}
// se pasa el filtro a la funcion
var x = arr.filter(primo)

// se imprime el resultado
console.log(x)