import App from '../App';
import Current from '../components/current/Current';
import Hourly from '../components/hourly/Hourly';
import Daily from '../components/daily/Daily';
import Day from '../components/daily/day/Day';
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

    // return ui current
    const currentUI = () => {
        return (
            <Current 
                daily={daily}
                current={current}
            />
        )
    }

    // return ui hourly
    const hourlyUI = () => {
        return (
            <Hourly />
        )
    }

    // return ui daily
    const dailyUI = () => {
        return (
            <Daily 
                days={listDay}
                current={current}
            />
        )
    }

    return (
        <App 
            current={currentUI}
            hourly={hourlyUI}
            daily={dailyUI}
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