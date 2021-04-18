// import style library
import './Daily.scss';
import * as statics from '../../constants/GlobalVariables';

// code function here
function Weekend(props) {
    // get props
    const {
        days,
        current
    } = props;


	// convert data current
	const {
		temp,
		weather
	} = current;
	const tempC = Math.floor(temp - 273.15);
	const iconUrl = weather?(statics.iconUrl + weather[0].icon + '@2x.png'):'';
	const description = weather?weather[0].description:'';


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
                            <img src={iconUrl} alt="sun" />
                        </div>
                        <div className="weekend__body__contents__weather">
                            <h3>Thành phố Hà Nội</h3>
                            <p>
                                <span className='temperature'>
                                    <b>{tempC}<sup>&#9900;</sup></b>
                                </span>
                                <span>{description}</span>
                            </p>
                        </div>
                    </div>
                    <div className='weekend__body__list-view'>
                        {
                            days
                        }
                    </div>
                </div>
            </div>

    )
}

export default Weekend;