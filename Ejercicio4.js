//proporcionamos una interfaz para leer datos desde un flujo de entrada
const readline = require('readline');

//interfaz de lectura rl
const rl = readline.createInterface({
    //entrada por teclado
    input: process.stdin,
    //salida por consola
    output: process.stdout
});

//obtenemos el año actual
const currentYear = new Date().getFullYear();;

//Solicitamos datos al usuario
rl.question('ingresa tu nombre: ', (name) => {
  rl.question('ingresa tu año de nacimiento: ', (birthYear) => {

    // Calcular la edad
    const edad = currentYear - birthYear;

    //Respuesta
    console.log(`Hola ${name}, Tienes ${edad} años`);

    //cerrar proceso
    rl.close();
  });
});
