// import style library
import './Day.scss';
import * as statics from '../../../constants/GlobalVariables';

// code function here
function Day(props) {
    const {
        data
    } = props;

    // convert data
    const {
        dt, 
        temp,
        weather
    } = data;
    const date = new Date(dt*1000);
    const tempMin = Math.floor(temp.min - 273.15);
    const tempMax = Math.floor(temp.max - 273.15);

    const weatherIconLink = statics.iconUrl + weather[0].icon + '.png';

    return (
        <div className='day'>
            <div className="day__time">
                <p>
                    {
                        statics.days[date.getDay()]
                    }
                </p>
                <p>
                    {
                        date.getDate() + ' ' + statics.months[date.getMonth()]
                    }
                </p>
                <div className="day__time__background">
                    <img src={weatherIconLink} alt='sun'/>
                </div>
            </div>
            <div className='day__temperature'>
                <p>{tempMax}<sup>&#9900;</sup></p>
                <p>{tempMin}<sup>&#9900;</sup></p>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Day;