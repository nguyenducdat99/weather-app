// import style library
import './Current.scss';
import * as handleData from '../../commons/handleData';


// code function here
function Current(props) {

    // get props
    const {
        current, 
        daily,
        typeTemp,
        onToggleTemperature,
        location
    } = props;


    // get data from current
    const {     
        weather,
        temp,
        sunrise,
        sunset,
        dt,
        feels_like,
        dew_point,
        humidity,
        wind_speed,
        visibility,
        pressure,
        clouds,
        uvi,
        wind_deg
    } = current;
    
    // convert data
    const wind_speedKmH = Math.floor(wind_speed*3.6);

    // return ui
    return (
        <div className='current'>
                <div className="current__option">
                    <span type='button'
                        className='current__option__btn'
                    >
                        <span className="fa fa-map-marker" aria-hidden="true"></span> Hiện tại
                    </span>
                </div>
                <div className="current__body">
                    <div className='current__body__quick-contents'>
                        <h1>{location.name}</h1>
                        <div className='temperature'>
                            <div>
                                <img src={handleData.convertIconURL(weather,'@2x')} alt=''/>
                            </div>
                            <div>
                                <b>
                                {
                                    handleData.convertTempC(temp,typeTemp)
                                }
                                <sup>&#9900;</sup></b>
                            </div>
                            <div>
                                <button type='button'
                                    className="temperature__active"
                                >
                                    {
                                        typeTemp?'C':'K'
                                    }
                                </button>
                                <button type='button'
                                    className="temperature__disable"
                                    onClick={onToggleTemperature}
                                >
                                    {
                                        typeTemp?'K':'C'
                                    }
                                </button>
                            </div>
                        </div>
                        <q><i><b>{handleData.convertDescription(weather)}</b></i></q>
                        <p><b>Đã cập nhật lúc &nbsp; 
                            {
                                handleData.getHourAndMinite(dt)
                            }    
                        </b></p>
                        <p>
                            <span>Dễ chịu: {handleData.convertTempC(feels_like,typeTemp)}<sup>&#9900;</sup> </span>&nbsp;&nbsp;
                            <span>Độ ẩm: {humidity||'0'}%</span>&nbsp;&nbsp;
                            <span>Gió: {wind_speedKmH||'0'}km/h</span>
                        </p>
                        <p>
                            <span>Áp suất: {pressure||'0'}mb </span>&nbsp;&nbsp;
                            <span>Tầm nhìn: {visibility/1000||'0'}km</span>&nbsp;&nbsp;
                            <span>Điểm sương: &nbsp;
                                {   
                                    handleData.convertTempC(dew_point,typeTemp)
                                }
                                <sup>&#9900;</sup>
                            </span>
                        </p>
                    </div>
                    <div className="current__body__detail-content">
                        <h3>Thông tin chi tiết</h3>
                        <div className="current__body__detail-content__grid">
                            <div className="current__body__detail-content__temperature">
                                <h4>Ban ngày</h4>
                                <p>Nhiệt độ cao nhất là &nbsp;
                                    {
                                        handleData.convertTempC(daily[0]?daily[0].temp.max:undefined,typeTemp)
                                    }
                                    <sup>&#9900;</sup></p>
                            
                                <h4>Ban đêm</h4>
                                <p>Nhiệt độ thấp nhất là &nbsp;
                                    {
                                        handleData.convertTempC(daily[0]?daily[0].temp.min:undefined,typeTemp)
                                    } 
                                    <sup>&#9900;</sup></p>
                            </div>
                            <div className="current__body__detail-content__sun">
                                <h4>Bình minh</h4>
                                <p>
                                    <span className="fa fa-sun-o" aria-hidden="true"></span>
                                    <span className="fa fa-long-arrow-up" aria-hidden="true"></span>
                                    &nbsp;
                                    {
                                        handleData.getHourAndMinite(sunrise)
                                    }
                                </p>
                                <h4>Hoàng hôn</h4>
                                <p>
                                    <span className="fa fa-sun-o" aria-hidden="true"></span>
                                    <span className="fa fa-long-arrow-down" aria-hidden="true"></span>
                                    &nbsp;
                                    {
                                        handleData.getHourAndMinite(sunset)
                                    }
                                </p>
                            </div>
                            <div className="current__body__detail-content__moon">
                                <h4>Mặt trăng lên</h4>
                                <p>
                                    <span className="fa fa-moon-o" aria-hidden="true"></span>
                                    <span className="fa fa-long-arrow-up" aria-hidden="true"></span>
                                    &nbsp;
                                    {
                                        handleData.getHourAndMinite(daily[0]?daily[0].moonrise:daily[0])
                                    }
                                </p>
                                <h4>Mặt trăng xuống</h4>
                                <p>
                                    <span className="fa fa-moon-o" aria-hidden="true"></span>
                                    <span className="fa fa-long-arrow-down" aria-hidden="true"></span>
                                    &nbsp;
                                    {
                                        handleData.getHourAndMinite(daily[0]?daily[0].moonset:'')
                                    }
                                </p>
                            </div>
                            <div className="current__body__detail-content__other">
                                <h4>Chỉ số cực tím</h4>
                                <p>{handleData.messageUVI(uvi)}</p>
                                <h4>Mây</h4>
                                <p>{clouds||0}%</p>
                                <p></p>
                                <h4>Hướng gió</h4>
                                <p>{wind_deg||0}<sup>&#9900;</sup></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='current__author'>
                    <span>Dữ liệu lấy từ &nbsp; 
                        <a href='https://www.openweathermap.org' target='_blank' rel="noopener noreferrer">Open weather</a>
                    </span>
                </div>
            </div>

    )
}

export default Current;