const argv = require('yargs')
    .command('Listar, Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    // .command('Crear, Graba un archivo con la tabla de multiplicar', {
    //     base: {
    //         demand: true,
    //         alias: 'b'
    //     },
    //     limite: {
    //         alias: 'l',
    //         default: 10
    //     }
    // })
    .help()
    .argv;

// const { crearArchivo, ListarTabla } = require('./multiplicar/multiplicar');
const { ListarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
console.log('comando........', comando);
switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        // crearArchivo(argv.base, argv.limite)
        //     .then(archivo => console.log(`Archivo creado: ${archivo}`))
        //     .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}
console.log('argv1====', argv);