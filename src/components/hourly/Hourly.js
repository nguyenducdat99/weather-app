// import style library
import './Hourly.scss';

// code function here
function Hourly(props) {

    return (
        <div className='hourly'>
                <div className="hourly__option">
                    <span type='button'
                        className='hourly__option__btn'
                    >
                        <span className="fa fa-clock-o" aria-hidden="true"></span> Hàng giờ
                    </span>

                </div>
                
            </div>

    )
}

export default Hourly;