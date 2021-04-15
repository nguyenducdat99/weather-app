import App from '../App';
import Weekend from '../components/weekend/Weekend';
import Day from '../components/weekend/day/Day';
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function AppContainer(props) {
    // get props
    const {
        getWeather,
        daily,
        current
    } = props;

    // load data
    useEffect(
        () => {
            getWeather();
            //eslint-disable-next-line
        },[]
    )

    const listDay = daily.map(
        (element, index) => {
            return (
                <Day
                    key={index}
                    data={element}
                />
            )
        }
    )
    // return ui weekend
    const weekendUI = () => {
        return (
            <Weekend 
                day={listDay}
            />
        )
    }

    return (
        <App 
            weekeend={weekendUI}
            current={current}
        />
    )
}

AppContainer.propTypes = {
    getWeather: PropTypes.func,
    daily: PropTypes.array,
    current: PropTypes.object
}

const mapStateToProps = state => {
    return {
        daily: state.daily,
        current: state.current
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getWeather: () => {
            dispatch(actions.onWeatherListen('Hà Nội'));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AppContainer);