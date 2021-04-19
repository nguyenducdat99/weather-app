// import style library
import './Day.scss';
import * as handleData from '../../../commons/handleData';

// code function here
function Day(props) {
    const {
        data,
        typeTemp
    } = props;

    // get value in data
    const {
        dt, 
        temp,
        weather,
        feels_like,
        humidity,
        pressure,
        wind_speed,
        uvi
    } = data;


    return (
        <div className='day__wrapper'>
            <div className='day'>
                <div className="day__time">
                    <p>
                        {
                            handleData.convertDayName(dt)
                        }
                    </p>
                    <p>
                        {
                            handleData.convertDayOfMonth(dt)
                        }
                    </p>
                    <div className="day__time__background">
                        <img src={handleData.convertIconURL(weather)} alt='sun'/>
                    </div>
                </div>
                <div className='day__temperature'>
                    <p>
                    {
                        handleData.convertTempC(temp.max,typeTemp)    
                    }
                    <sup>&#9900;</sup></p>
                    <p>
                    {
                        handleData.convertTempC(temp.min,typeTemp)
                    }
                    <sup>&#9900;</sup></p>
                </div>
            </div>
            <div className="day-detail">
                <h3>{handleData.convertDayOfMonth(dt)}</h3>
                <p>Cao nhất: {handleData.convertTempC(temp.max,typeTemp)}<sup>&#9900;</sup></p>
                <p>Thấp nhất: {handleData.convertTempC(temp.min,typeTemp)}<sup>&#9900;</sup></p>
                <p>Dễ chịu: {handleData.convertTempC(feels_like.morn,typeTemp)}<sup>&#9900;</sup></p>
                <p>Độ ẩm: {humidity}%</p>
                <p>Áp suất: {pressure}mb</p>
                <p>Gió: {Math.floor(wind_speed*3.6)}km/h</p>
                <p>Uvi: {handleData.messageUVI(uvi)}</p>
                <p><i>{handleData.convertDescription(weather)}</i></p>
            </div>
        </div>
    )
}

export default Day;