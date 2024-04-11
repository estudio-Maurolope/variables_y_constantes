//proporcionamos una interfaz para leer datos desde un flujo de entrada
const readline = require('readline');

//interfaz de lectura rl
const rl = readline.createInterface({
    //entrada por teclado
    input: process.stdin,
    //salida por consola
    output: process.stdout
});

//Solicitamos datos al usuario
rl.question('Ingresa tu peso: ', (peso) => {
  rl.question('Ingresa tu año de altura: ', (altura) => {

   // Calcular la IMC
      const IMC = peso/altura**2;

      //Respuesta
      console.log(`Tu IMC es:  ${IMC}`);

      //cerrar proceso
      rl.close();
    });
  });