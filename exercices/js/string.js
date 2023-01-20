/* String methods 1
Dada la string que tenéis a continuación, haced los console.log() correspondientes para conseguir los siguientes outputs: */
let stringToLog = '    JavaScript is fun! ';

console.log(stringToLog.length); // 23
console.log(stringToLog.trim())// 'JavaScript is fun!'
console.log (stringToLog.toLowerCase().trim().split('s'));// ['java', 'cript i', ' fun!']
console.log(stringToLog.trim().toUpperCase)// 'JAVASCRIPT IS FUN!'
console.log(stringToLog.trim().charAt(14))// 'f'
console.log(stringToLog.trim().indexOf('c'))// 5
console.log(stringToLog.trim().indexOf('u'))// 15
console.log(stringToLog.trim().replace('JavaScript', 'CSS'))// 'CSS is fun!'

/* String Methods 2
Dada la string stringToChange, modificadla de tal manera que los console.log() devuelvan los outputs comentados. */
const original = 'Hello world!';
let stringToChange = 'Hello world!';

let stringToChange1 = stringToChange.substring(0,8);
let stringToChange2 = stringToChange.substring(5,12);
let stringToChange3 = stringToChange.toLowerCase();
let stringToChange4 = stringToChange.replace('world', 'w0rld');
let stringToChange5 = stringToChange.replace('w', 'W')
console.log(stringToChange1.endsWith('o')); // true
console.log(stringToChange2.charAt(3)); // 'r'
console.log(stringToChange3.includes('hello')); // true
console.log(stringToChange4.lastIndexOf('o')); // 4
console.log(stringToChange5.indexOf('w')); // -1

/* Number methods 1
En un banco quieren hacer una web que muestre cuánto dinero ha ganado al día un usuario. Dicho usuario ha ganado en un mes que tiene 30 días un total de 3100€. ¿Cómo mostrarías esa cifra correctamente para el usuario? */
function salarioDiario(salarioTotal, dias) {
    let salarioXDia = (salarioTotal / dias).toFixed(2);
    return salarioXDia;
  }
  console.log(salarioDiario(3100, 30)); 
  

/* Number methods 2
En una página de diseño quieren crear una paleta de colores, para ello quieren coger un elemento representado de forma hexadecimal y sumarle 336655. Si se pasa del valor 255 (en decimal) de la paleta de colores empezará desde 00. Haz un ejemplo con el color #0000FF sabiendo que cada canal R-G-B corresponde, en orden, a las cifras de dos en dos. R = 00, G=00, B=ff. */

let colorR = 0;
let colorG =0;
let colorB = 255;
/* if */
if(colorR>255) {
    colorR = 0
} 
if(colorG>255) {
    colorG = 0
} 
if(colorB>255) {
    colorB = 0
} ;

colorR += 33;
colorG +=66;
colorB+=65;

colorB-=255;

console.log(colorR, colorG, colorB)

colorR= colorR.toString(16);
colorG= colorG.toString(16);
colorB= colorB.toString(16)

console.log(colorR, colorG, colorB)

let newColor = "#" + colorR + colorG + colorB;

console.log(newColor)