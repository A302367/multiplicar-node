// requireds
// const fs = require('fs');
// let crearArchivo = (base, limite = 10) => {
//     return new Promise((resolve, reject) => {
//         if (!Number(base)) {
//             reject(`La base elegida ${ base } no es un número`);
//             return
//         };
//         if (!Number(limite)) {
//             reject(`El limite elegido ${ limite } no es un número`);
//             return
//         };
//         let data = '';
//         for (let i = 1; limite; i++) {
//             //console.log(`${base} *  ${ i } = ${ base * i }`)
//             data += `${base} *  ${ i } = ${ base * i }\n`
//         };

//         fs.writeFile(`tablas/tabla-${base }- al -${ limite }.txt`, data, (err) => {
//             if (err)
//                 reject(err)
//             else
//                 resolve(`tabla-${base}- al -${ limite }.txt`);
//         });
//     });
// }

let ListarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base elegida ${ base } no es un número`);
            return
        };
        if (!Number(limite)) {
            reject(`El limite elegido ${ limite } no es un número`);
            return
        };
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} *  ${ i } = ${ base * i }`)

        };

    });
}
module.exports = {
    // crearArchivo,
    ListarTabla
}