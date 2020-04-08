const axios = require('axios')

const getLugarLatLog = async(direccion) => {

    const encodeUrl = encodeURI(direccion)


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "f978ff74bfmsh123877eca21f426p1312c4jsn994b0b5e4384"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0)
        throw new Error(`No exite la direción: ${direccion}`)

    const data = resp.data.Results[0]
    const dire = data.name
    const lat = data.lat
    const lon = data.lon

    return {
        direccion,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLog
}