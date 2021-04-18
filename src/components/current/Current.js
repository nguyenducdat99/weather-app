// import style library
import './Current.scss';
import * as statics from '../../constants/GlobalVariables';
import moment from 'moment';

// code function here
function Current(props) {

    // get props
    const {
        current, 
        daily
    } = props;

    // get data from current
    const {     
        weather,
        temp,
        sunrise,
        sunset,
        dt
    } = current;
    
    // convert data
    const timeUpdate = new Date(dt*1000);

    const tempC = Math.floor(temp - 273.15);
    const weatherIconLink = weather ? (statics.iconUrl + weather[0].icon + '.png'):'';
    const description = weather?(weather[0].description):'';
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
                        <h1>Thành phố Hà Nội</h1>
                        <div className='temperature'>
                            <div>
                                <img src={weatherIconLink} alt=''/>
                            </div>
                            <div>
                                <b>{tempC}<sup>&#9900;</sup></b>
                            </div>
                            <div>
                                <button type='button'
                                    className="temperature__active"
                                >C</button>
                                <button type='button'
                                    className="temperature__disable"
                                >K</button>
                            </div>
                        </div>
                        <q><i><b>{description}</b></i></q>
                        <p><b>Đã cập nhật lúc &nbsp; 
                            {
                                moment(timeUpdate).format('hh:mm')
                            }    
                        </b></p>
                        <p>
                            <span>Dễ chịu: 10 </span>&nbsp;|&nbsp;
                            <span>Độ ẩm: 20</span>&nbsp;|&nbsp;
                        </p>
                    </div>
                    <div className="current__body__detail-content">
                        <h3>Thông tin chi tiết</h3>
                        <div className="current__body__detail-content__grid">
                            <div className="current__body__detail-content__temperature">
                                <h4>Ban ngày</h4>
                                <p>Nhiệt độ cao nhất là 23 <sup>&#9900;</sup></p>
                            
                                <h4>Ban đêm</h4>
                                <p>Nhiệt độ thấp nhất là 18 <sup>&#9900;</sup></p>
                            </div>
                            <div className="current__body__detail-content__sun">
                                <h4>Bình minh</h4>
                                <p>
                                    <span className="fa fa-sun-o" aria-hidden="true"></span>
                                    <span className="fa fa-long-arrow-up" aria-hidden="true"></span>
                                    &nbsp;
                                    {
                                        moment(new Date(sunrise*1000)).format('hh:mm')
                                    }
                                </p>
                                <h4>Hoàng hôn</h4>
                                <p>
                                    <span className="fa fa-sun-o" aria-hidden="true"></span>
                                    <span className="fa fa-long-arrow-up" aria-hidden="true"></span>
                                    &nbsp;
                                    {
                                        moment(new Date(sunset*1000)).format('hh:mm')
                                    }
                                </p>
                            </div>
                            <div className="current__body__detail-content__other">
                                c
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

    )
}

export default Current;