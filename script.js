// Ejercicio 1
/* var famosos = [];
        do {
            x = prompt("Ingrese famosos: ");
            famosos.push(x)
        } while (x != ""); */

// Ejercicio 2
/* function invertircadena(ilv) {

    var separarCadena = ilv.split("");
    

    separarCadena.reverse();
    
    var unirArreglo = separarCadena.join("");
    
    return unirArreglo;
}
invertircadena("Hola"); */

// Ejercicio 3
/* function separarCadena(ilv) {

    var separarCadena = ilv.split("");

    var ordenar = separarCadena.sort();

    var juntar = ordenar.join("");
    
    return ordenar;
}
separarCadena("nahuel");  */

// Ejercicio 4
/* var lista = []
for (let i = 0; i < 50; i++) {
    lista.push(i + 1)           
}
function pares(ilv) {
    var filtrado = lista.filter(n => n % 2 == 0);
    return filtrado
}
pares(lista) */

// Ejercicio 5
/* var nombres = ["Nahuel", "Wendy", "Hernando", "linus", "megan"];
nombres = nombres.join(".");
nombres 
 */

// Ejercicio 6
/* var n1= parseInt(prompt(`ingresa un número`))
var n2= parseInt(prompt(`ingresa otro número`))
var i= 0
function pares(x,y){
    for (var i=x; i<=y; i++) {
        if (i %2==0) {
            document.write(i + "<br>")
        }
    }
};
pares(n1,n2); */

// Ejercicio 7
/* var edad=parseInt(prompt('introduce una edad'))
var maximo=parseInt(prompt('introduce un maximo'))
function Mayor(x,y){
    if (x>=y) {
        alert('es mayor al maximo');
    }
    else {
        alert('Es chico');
    }
    return (Mayor);
}
Mayor(edad,maximo); */

// Ejercicio 8
/* var usuario = prompt("ingresa tu usuario");
var contraseña = prompt("ingresa la contraseña");
const usuariov= "ilvy@gmail.com"
const contraseñav= "ilvy" 
function validar(x,y) {
   if (usuariov==usuario && contraseñav==contraseña){
       alert("la sesión ha sido iniciada");
   }
       else {
           alert('el usuario o la contraseña es incorrecto');
       }
}
validar(usuario,contraseña); */