import App from '../App';
import Current from '../components/current/Current';
import Hourly from '../components/hourly/Hourly';
import Daily from '../components/daily/Daily';
import Day from '../components/daily/day/Day';
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import TempChart from '../components/hourly/chart/tempChart';

function AppContainer(props) {
    // get props
    const {
        getWeather,
        daily,
        current,
        typeTemp,
        onToggleTemperature,
        hourly,
        location
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
                    typeTemp={typeTemp}
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
                typeTemp={typeTemp}
                onToggleTemperature={onToggleTemperature}
                location={location}
            />
        )
    }

    // return ui hourly
    const hourlyUI = () => {
        return (
            <Hourly
                tempChartUI={tempChartUI}
            />
        )
    }

    // return ui daily
    const dailyUI = () => {
        return (
            <Daily 
                days={listDay}
                current={current}
                typeTemp={typeTemp}
                location={location}
            />
        )
    }


    // return ui temp chart
    const tempChartUI = () => {
        return (
            <TempChart 
                hourly={hourly}
                typeTemp={typeTemp}
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
    current: PropTypes.object,
    typeTemp: PropTypes.bool,
    onToggleTemperature: PropTypes.func,
    location: PropTypes.object
}

const mapStateToProps = state => {
    return {
        daily: state.daily,
        current: state.current,
        typeTemp: state.temperature,
        hourly: state.hourly,
        location: state.location,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getWeather: () => {
            dispatch(actions.onWeatherListen());
        },
        onToggleTemperature: () => {
            dispatch(actions.onToggleTemperature());
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (AppContainer);