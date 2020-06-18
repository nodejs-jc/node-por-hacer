const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log(colors.green('============= Por Hacer ============'));
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log(colors.green('===================================='));
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizar) {
            console.log(`Tarea acualizada con éxito a ${argv.completado}`);
        } else {
            console.log('No se pudo actualizar la tarea');
        }
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log('Tarea eliminada :', borrar);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}