// import style library
import './Weekend.scss';

// code function here
function Weekend(props) {
    // get props
    const {
        day
    } = props;

    return (
        <div className='weekend'>
            {
                day
            }
        </div>
    )
}

export default Weekend;