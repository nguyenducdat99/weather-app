// import style library
import './Hourly.scss';

// code function here
function Hourly(props) {
    // get props
    const {
        tempChartUI
    } = props;


    return (
        <div className='hourly'>
                <div className="hourly__option">
                    <span type='button'
                        className='hourly__option__btn'
                    >
                        <span className="fa fa-clock-o" aria-hidden="true"></span> Hàng giờ
                    </span>
                </div>
                <div className='hourly__body'>
                    <h4>Thông tin nhiệt độ hàng ngày</h4>
                    <div className='hourly__body__temp-chart'>
                        {
                            tempChartUI()
                        }
                    </div>
                </div>
                <div className='hourly__author'>
                        <span>Dữ liệu lấy từ &nbsp; 
                            <a href='https://www.openweathermap.org' target='_blank' rel="noopener noreferrer">Open weather</a>
                        </span>
                    </div>
            </div>

    )
}

export default Hourly;