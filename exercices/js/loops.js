/* Loops 1
Crea un for loop que cuente de 0 a 100 i en cada iteración sume el valor actual a un resultado total. Al final haz un console.log que printee el resultado. */

let result = 0;
for(let i=0; i <= 100; i++){
    result += i;
   
} console.log(result);

/* Loops 2
Crea un array de números llamado "numbers" con valores aleatorios. Utiliza un for loop para recorrer el array y encontrar el número mayor y el número menor. Imprime ambos números en la consola. */

const numbers = [15,2,35,69,51,24,105,9];
console.table(numbers);


let l = numbers.length;
let maxNum= -Infinity;
let minNum= Infinity;
for (let i = 0; l >= i; i++) {

    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }

        if (numbers[i] < minNum) {
        minNum = numbers[i]
    }
} console.log(`max number = ${maxNum} and min number = ${minNum}`)


/* Loops 3
Utiliza un bucle while para imprimir los números pares del 2 al 20. */
let evenNumber = 2;
while (evenNumber <= 20) {
    if(evenNumber % 2 == 0) console.log(evenNumber);
        evenNumber++;
}


/* Loops 4
Crea una variable llamada "numeroAdivinar" con un número entero entre 1 y 10 (puedes asignarle un valor manualmente).
Crea una variable llamada "numeroIngresado" y asignale el valor 0.
Utiliza un bucle do...while para asignar a la variable "numeroIngresado" un número entero obtenido de un array de números [1,2,3,4,5,6,7,8,9,10]. El bucle debe continuar hasta que "numeroIngresado" sea igual a "numeroAdivinar".
Una vez que el bucle finaliza, imprime en la consola el número de iteraciones realizadas. */

let numAdivinar = 7;
let numIngresado = 0;
let arrayNum = [1,2,3,4,5,6,7,8,9,10];
let intentos = 0;

do{
    numIngresado = arrayNum[intentos];
    intentos++;

}while (numIngresado!=numAdivinar);

console.log(`El número a adivinar era ${numAdivinar} y se adivinó en ${intentos} intentos`);