const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e9091b89bd71201ba8cce4f77a164a50&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}