//Esto es un comentario.
/* esto es un comentario de 
multiples lineas*/

//mostrar un mensaje en la consola

console.log('hola mundo');

//mostrar un mensaje en la pagina html

document.write("este es un mensaje");

//mostrar un mensaje en una ventana emergente

//alert('Esto es una alerta o ventana emergente');

//crear o declarar variables (var - let- const)

 //"nombre de la cajita" estamos etiquetando la caja, o lo que esperamos guardar dentro

 var alumno = 'Rodrigo';
 let edad = 27; //los numeros no requiere comilla de string

 document.write('<br> Alumno: '+ alumno );
 document.write('<br> Edad: '+ edad );

 alumno = 'Marta';
 document.write('<br> Alumno: '+ alumno );

 //pedir a un usuario que ingrese un nombre de alumno

 alumno = prompt('Ingrese un nombre de un alumno');
 document.write('<br> Alumno: '+ alumno );

 edad = prompt('Ingrese una edad de un alumno');
 document.write('<br> Edad: '+ edad );

 const url = 'https://twitter.com/home' ;
 document.write('<br> URL: '+ url);

 let numero1 = 20;
 let numero2 = parseInt(prompt('ingrese un numero'));

 document.write('<br> Resultado:' + (numero1 + numero2));