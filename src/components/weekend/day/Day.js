// import style library
import './Day.scss';
import sun from '../../../statics/images/sun.png';

// code function here
function Day() {
    return (
        <div className='day'>
            <div className="day__time">
                <p>Thứ tư</p>
                <p>14 tháng tư</p>
                <img src={sun} alt='sun'/>
            </div>
            <div className='day__temperature'>
                <p>27<sup>&#9900;</sup></p>
                <p>23<sup>&#9900;</sup></p>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default Day;