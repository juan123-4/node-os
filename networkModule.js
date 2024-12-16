const os = require('os');

function obtenerDatosDeRed() {
  const interfaces = os.networkInterfaces();
  
  for (const nombreInterfaz in interfaces) {
    console.log(`Interfaz ${nombreInterfaz}:`);

    interfaces[nombreInterfaz].forEach((detalle) => {
      console.log(`  Familia: ${detalle.family}`);
      console.log(`  Dirección: ${detalle.address}`);
      console.log(`  Interno: ${detalle.internal}`);
    });

    console.log(); // Línea en blanco para separar las interfaces
  }
}

obtenerDatosDeRed();
module.exports={obtenerDatosDeRed};
