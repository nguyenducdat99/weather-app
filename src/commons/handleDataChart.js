import moment from 'moment';

export const getLabels = array => {
    if (!array) return [];

    let result = array.map(
        element => {
            return moment(new Date(element.dt*1000)).format('hh:mm A') + ' ' + moment(new Date(element.dt*1000)).format('DD-MM-yyyy')
        }
    );
    
    return result;
}

export const getFeelsLike = (array,isC) => {
    if (!array) return [];
    const convert = isC?273.15:0; 

    let result = array.map(
        element => {
            return Math.floor(element.feels_like - convert);
        }
    );
    
    return result;
}
export const getTemp = (array,isC) => {
    if (!array) return [];
    const convert = isC?273.15:0; 

    let result = array.map(
        element => {
            return Math.floor(element.temp - convert);
        }
    );
    
    return result;
}
export const getDewPoint = (array,isC) => {
    if (!array) return [];
    const convert = isC?273.15:0; 

    let result = array.map(
        element => {
            return Math.floor(element.dew_point - convert);
        }
    );
    
    return result;
}