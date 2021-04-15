import App from '../App';
import Weekend from '../components/weekend/Weekend';
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function AppContainer(props) {
    // get props
    const {
        getLocations,
        weather
    } = props;

    // load data
    useEffect(
        () => {
            getLocations();
            //eslint-disable-next-line
        },[]
    )

    // return ui weekend
    const weekendUI = () => {
        return (
            <Weekend/>
        )
    }

    return (
        <App 
            weekeend={weekendUI}
        />
    )
}

AppContainer.propTypes = {
    getLocations: PropTypes.func,
    weather: PropTypes.object
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getLocations: () => {
            dispatch(actions.onWeatherListen('Hà Nội'));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (AppContainer);