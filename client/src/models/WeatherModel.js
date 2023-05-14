module.exports = class WeatherModel {
    date
    time
    temp
    pressure
    humidity
    wind
    town

    constructor(date,
        time,
        temp,
        pressure,
        humidity,
        wind,
        town) {
        Object.assign(this, {
            date,
            time,
            temp,
            pressure,
            humidity,
            wind,
            town
        })
    }
}