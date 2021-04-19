// import style library
import './Daily.scss';
import * as handleData from '../../commons/handleData';

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
                                        handleData.convertTempC(temp,true)
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
                </div>
            </div>

    )
}

export default Weekend;