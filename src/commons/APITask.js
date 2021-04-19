import * as APICaller from './APICaller';

export const getWeather = async location => {
    const response = await APICaller.getAPI(
        'GET',
        ('http://api.openweathermap.org/data/2.5/onecall?'+
        'appid=7dae8f72de1919406e84921487385252&'+
        `lat=${location.lat}&`+
        `lon=${location.lon}&`+
        'lang=vi'),
        null
    )

    return response;
}

export const getlocation = async () => {
    try {
        const location = await APICaller.getCoords();

        return location;
    } catch (error) {
        console.log(error);
        return {
            lat: null,
            lon: null
        };
    }
}


