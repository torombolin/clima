const lugar = require('./Funciones/lugar')
const clima = require('./Funciones/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLog(direccion)
        const temperatura = await clima.getClima(coord.lat, coord.lon)

        return `El clima de ${direccion} ahora es de ${ temperatura }.`

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)