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

// Ejercicio 9
/* let n1=parseInt(prompt ('Ingrese un número'));
let n2=parseInt(prompt ('Ingrese otro número'));
    if (n1>=0&&n2>=0){
        alert(n1+n2)
    }
        else{
            alert('error')
        } */

// Ejercicio 10
/* var x= parseInt(prompt('ingrese un número'));
function Sumar(a) { 
    if (a>10) { 
        a=parseInt(prompt('ingrese un número'));
        if (a>100) {
            alert("A")}
        else {
            alert("B")
        }
    }
    
    else {
        a=parseInt(prompt('ingrese un número'));
        if (a>1000) { 
            alert ("C")
        }
        else {
            alert ("D")
        }
    }
}
Sumar(x);
alert(x); */

/////////////Objetos//////////////////

// Ejercicio 1
/* let Pelis = [
    {Nombre:"El secreto de sus ojos", año: 2007, director: "Juan José Campanella", actuan: "Soledad Villamil, Ricardo Darín ", duración: "120 min", genero: "Policial, drama. "},
    {Nombre: "El ultimo samurai", año: 2003,director: "Edward Zwick", actuan: "Tom cruise", duración: "120 min", genero: "Bélico,histórico "},
    {Nombre: "Tierra de osos", año: 2000, director: "Robert Walker", actuan: "Koda, Kenai, La viejita. ", duración: "120 min", genero: "Animación, aventura, drama "},
    {Nombre: "The babadook", año: 2012, director: "Jennifer Kent", actuan: "Noah wisemann, Essie Davies", duración: "120 min", genero: "Terror. "}
]
for(let i= 0; i<Pelis.length; i++) {
    var peli = Pelis[i];
    document.write ("Nombre: " + "<b>" + peli.Nombre + "</b>" + ", año: "
    + peli.año + ", Directed by: " + peli.director + "actúan: "+ peli.actuan + "Duración: " + peli.duración + "Género: " +peli.genero+ "<br>")
} */

// Ejercicio 2

/* class Pelis {
    constructor(nombre, año, director, actuan, duración, genero, pais, atp){
        this.nombre=nombre;
        this.año= año;
        this.director= director;
        this.actuan= actuan;
        this.duración= duración;
        this.genero= genero;
        this.pais= pais;
        this.atp= atp;          
    }
    mostrarPelis(){
        document.write(this.nombre+ "<br>" + this.año+ "<br>" + this.director+ "<br>" + this.actuan+ "<br>" +this.duración+ "<br>" +this.genero+ "<br>" +this.pais+ "<br>" +this.atp+ "<br>");
    } 
} 
var Peli1 = new Pelis ("a 2 metros de ti","2019","Justin Baldoni","Haley Lu Richardson, Darín", "120min", "Romance", "EEUU", "ATP");
var Peli2 = new Pelis ("a 2 metros de ti","2019","Justin Baldoni","Haley Lu Richardson, Darín", "120min", "Romance", "EEUU", "ATP");
var Peli3 = new Pelis ("a 2 metros de ti","2019","Justin Baldoni","Haley Lu Richardson", "120min", "Romance", "EEUU", "ATP");
var Peli4 = new Pelis ("a 2 metros de ti","2019","Justin Baldoni","Haley Lu Richardson", "120min", "Romance", "EEUU", "ATP");
Peli1.mostrarPelis()
Peli2.mostrarPelis()
Peli3.mostrarPelis()
Peli4.mostrarPelis() */

// Ejercicio 3
/* function sumar(){
    var x=parseInt (document.getElementById('valor1').value);
    var y=parseInt (document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=(x+y);   
}
function restar(){
    var x=parseInt (document.getElementById('valor1').value);
    var y=parseInt (document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=(x-y);   
}
function multiplicar(){
    var x=parseInt (document.getElementById('valor1').value);
    var y=parseInt (document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=(x*y);   
}
function dividir(){
    var x=parseInt (document.getElementById('valor1').value);
    var y=parseInt (document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=(x/y);   
}
function raiz() {
    var x=parseInt (document.getElementById('valor1').value);
    document.getElementById('resultado').innerHTML=(Math.sqrt(x))
}
function log(){
    var x=parseInt (document.getElementById('valor1').value);
    document.getElementById('resultado').innerHTML=(Math.log10(x));   
}
function potencia(){
    var x=parseInt (document.getElementById('valor1').value);
    var y=parseInt (document.getElementById('valor2').value);
    document.getElementById('resultado').innerHTML=(Math.pow(x,y));   
} */

// Ejercicio 4
/* let mes=parseInt(prompt ("ingresa un número"));
var arrayMes = ["Enero", "Febrero","Marzo","Abril","Mayo ", "Junio", "julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
switch (mes) {
    case 1: document.write(arrayMes[0]);
    break;
    case 2: document.write(arrayMes[1]);
    break;
    case 3: document.write(arrayMes[2]);
    break;
    case 4: document.write(arrayMes[3]);
    break;
    case 5: document.write(arrayMes[4]);
    break;
    case 6: document.write(arrayMes[5]);
    break;
    case 7: document.write(arrayMes[6]);
    break;
    case 8: document.write(arrayMes[7]);
    break;
    case 9: ddocument.write(arrayMes[8]);
    break;
    case 10: document.write(arrayMes[9]);
    break;
    case 11: document.write(arrayMes[10]);
    break;
    case 12: document.write(arrayMes[11]);
    break;
    default: document.write("meh")
} */

// Ejercicio 5
/* let Estudiantes = [
    {Nombre :`Victor`,Edad : `18 años`,GéneroMusical : `bachata`,Mascotas : `1 gato`, Gustos : [`Hamburgeusas`, `musica`]},
    {Nombre :`Gabriel`,Edad : `21 años`,GéneroMusical : `Pop alternativo`,Mascotas : `2 perros`, Gustos : [`Hamburguesas`, `musica`]},
    {Nombre :`Franco`,Edad : `22 años`,GéneroMusical : `Electro`,Mascotas : `3 mapaches`, Gustos : [`Hamburguesas`, `musica`]},
    {Nombre :`Pablo`,Edad : `22 años`,GéneroMusical : `Rock`,Mascotas : `1 loro`, Gustos : [`Hamburguesas`, `musica`]},
    {Nombre :`Tamara`,Edad : `21 años`,GéneroMusical : `Pop`,Mascotas : `4 cuis`, Gustos : [`Hamburguesas`, `musica`]},
]
for(let i= 0; i<Estudiantes.length; i++) {
    var estudiante = Estudiantes[i];
    document.write ("Nombre: " + "<b>" + estudiante.Nombre + "</b>" + ", edad: "+ estudiante.edad + ", Género Musical: " + estudiante.GéneroMusical + "<br>") */