import moment from 'moment';
import * as statics from '../constants/GlobalVariables';

export const getHourAndMinite = timestamp => {
    const date = new Date(timestamp*1000);

    return moment(date).format('hh:mm A')
}

export const convertTempC = (temp, isC) => {
    if (!temp) return 0;
    if (isC) return Math.floor(temp - 273.15);

    return Math.floor(temp);
}

export const convertDayName = timestamp => {
    if (!timestamp) return '';
    const date = new Date(timestamp*1000);

    return statics.days[date.getDay()];
}

export const convertDayOfMonth = timestamp => {
    if (!timestamp) return '';
    const date = new Date(timestamp*1000);

    return date.getDate() + ' ' + statics.months[date.getMonth()]
}

export const convertIconURL = (weather,option) => {
    if (!weather) return '';
    option = option||'';

    return statics.iconUrl + weather[0].icon + option + '.png';
}

export const convertDescription = weather => {
    if (!weather) return '';

    return weather[0].description;
}