/*
    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos
*/

let numerosPrimos = (num1, num2) => {
    let total = 0;
    let i = num1, j = num2;
    console.log("Los números primos entre " + num1 + " y " + num2 + " son:");
    while (i <= j) {
        let k = i/2;
        while (k >= 1) {
            if (i%k === 0 && k > 1) {
                break;
            }else if (k === 1) {
                console.log(i);
                total += i;
                k--;
            }else{
                k--;
            }
        }
        i++;
    }
    console.log("La suma de todos los números primos entre " + num1 + " y " + num2 + " es: " + total);
}
numerosPrimos(1, 100);

/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/

let array1 = [1,4,5,7];
let array2 = [2,1,5,1,1];

let sumArray = (array1, array2) => {
    
}

console.log(sumArray(array1, array2));