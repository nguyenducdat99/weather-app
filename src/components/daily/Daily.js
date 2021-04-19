// import style library
import './Daily.scss';
import * as handleData from '../../commons/handleData';

// code function here
function Weekend(props) {
    // get props
    const {
        days,
        current,
        typeTemp
    } = props;

	// convert data current
	const {
		temp,
		weather
	} = current;

    return (
        <div className='weekend'>
                <div className="weekend__option">
                    <span type='button'
                        className='weekend__option__btn'
                    >
                        <span className="fa fa-calendar" aria-hidden="true"></span> Hàng ngày
                    </span>

                </div>
                <div className="weekend__body">
                    <div className='weekend__body__contents'>
                        <div className="weekend__body__contents__icon">
                            <img src={handleData.convertIconURL(weather,'@2x')} alt="sun" />
                        </div>
                        <div className="weekend__body__contents__weather">
                            <h3>Thành phố Hà Nội</h3>
                            <p>
                                <span className='temperature'>
                                    <b>
                                    {
                                        handleData.convertTempC(temp,typeTemp)
                                    }
                                    <sup>&#9900;</sup></b>
                                </span>
                                <span>{handleData.convertDescription(weather)}</span>
                            </p>
                        </div>
                    </div>
                    <div className='weekend__body__list-view'>
                        {
                            days
                        }
                    </div>
                    <div className='weekend__author'>
                        <span>Dữ liệu lấy từ &nbsp; 
                            <a href='https://www.openweathermap.org' target='_blank' rel="noopener noreferrer">Open weather</a>
                        </span>
                    </div>
                </div>
            </div>

    )
}

export default Weekend;