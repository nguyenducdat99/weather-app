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
        weather
    } = data;

    return (
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
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Day;