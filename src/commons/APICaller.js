import axios from 'axios';

export const getAPI = async (method, endpoint, data) => {
    try {
        const response = await axios(
            {
                method: method,
                url: endpoint,
                dataa: data
            }
        )

        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getCoords = async () => {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return {
      lon: position.coords.longitude,
      lat: position.coords.latitude,
    };
};