// import style library
import './Current.scss';
import * as statics from '../../constants/GlobalVariables';

// code function here
function Current(props) {

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
                                <img src={statics.iconUrl + '04d@2x.png'} alt=''/>
                            </div>
                            <div>
                                <b>30<sup>&#9900;</sup></b>
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
                        <q><i><b>Mây thưa</b></i></q>
                        <p><b>Đã cập nhật lúc 12:30pm</b></p>
                        <p>
                            <span>Dễ chịu: 10 </span>&nbsp;|&nbsp;
                            <span>Độ ẩm: 20</span>&nbsp;|&nbsp;
                        </p>
                    </div>
                    <div className="current__body__detail-content">
                        <h3>Thông tin chi tiết</h3>
                    </div>
                </div>
                
            </div>

    )
}

export default Current;