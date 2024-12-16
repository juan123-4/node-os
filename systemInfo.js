const todo=require("./osModule");
const everyting=require("./networkModule");

const informacion=todo.infoSistema();
console.log(informacion);

const red=everyting.obtenerDatosDeRed();
console.log(red)

