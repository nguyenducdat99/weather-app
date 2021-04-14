// import style library
import './Weekend.scss';
import Day from './day/Day';

// code function here
function Weekend() {
    return (
        <div className='weekend'>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
            <Day/>
        </div>
    )
}

export default Weekend;