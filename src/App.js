// import style library, component
import './App.scss';
import Slider from 'react-slick';
import { useState } from 'react';


function App(props) {
	// declare state component
	const [keyword, setKeyword] = useState('')

	// handle when change keyword
	const onHandleChangeKeword = event => {
		const value = event.target.value;

		setKeyword(value);
	}

	// setting for slide
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlay: false
	  };


	// get props
	const {
		current,
		hourly,
		daily,
		getLattitudeAndLongtitude,
		getWeather
	} = props;

	// handle when click button search
	const onSearch = () => {
		getLattitudeAndLongtitude(keyword);
	}

	// handle when click button reset
	const onReset = () => {
		setKeyword('');
		getWeather()
	}

	return (
		<div className="app">
			<div className='app__search'>
				<form action='' method=''>
					<div className='form-group'>
						<input type='text'
							className='form-control'
							value={keyword}
							onChange={onHandleChangeKeword}
						/>
						<button type='button' onClick={onSearch}>
							<i className="fa fa-search" aria-hidden="true"></i>
						</button>
						<button type='button' onClick={onReset}>
							<i className="fa fa-undo" aria-hidden="true"></i>
						</button>
					</div>
				</form>
			</div>
			<Slider settings={settings}>
				<div className='app__current'>
					{
						current()
					}
				</div>
				<div className='app__hours'>
					{
						hourly()
					}
				</div>
				<div className='app__daily'>
					{
						daily()
					}
				</div>
			</Slider>
		</div>
	);
}

export default App;
