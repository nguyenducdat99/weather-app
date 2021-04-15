import APICaller from './APICaller';

export const getWeather = async location => {
    const response = await APICaller(
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

export const getGeo = async city => {
    const response = await APICaller(
        'GET',
        ('http://api.openweathermap.org/geo/1.0/direct?'+
        `q=${city}&`+
        'limit=5&'+
        'appid=7dae8f72de1919406e84921487385252'),
        null
    )

    return response;
}