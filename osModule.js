const os= require("os");

function infoSistema(){
    const nombre=os.platform();
    const tipo=os.type();
    const version=os.release(); 
    const arquitectura=os.arch();
    const Cpus=os.cpus().length;
    const MemoriaTotal=(os.totalmem()/(1024*1024)).toFixed(2);
    const MemoriaLibre=(os.freemem()/(1024*1024)).toFixed(2);

    console.log(`Nombre:${nombre}`)
    console.log(`Tipo:${tipo}`)
    console.log(`Version:${version}`)
    console.log(`Arquitectura:${arquitectura}`)
    console.log(`CPUS:${Cpus}`)
    console.log(`Memoria Total:${MemoriaTotal}MB`)
    console.log(`Memoria libre:${MemoriaLibre}MB`)
 }


    infoSistema();
    module.exports={infoSistema}

