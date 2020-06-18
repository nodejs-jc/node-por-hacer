const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea '

}

const otpsCrear = {
    descripcion
}
const otpsActualizar = {
    descripcion,
    completado
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', otpsCrear)
    .command('actualizar', 'Actualiza el estado de una tarea', otpsActualizar)
    .command('borrar', 'Elimina una tarea', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}