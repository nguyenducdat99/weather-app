// import style library, component
import './App.scss';
import Slider from 'react-slick';


function App(props) {
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
		// hourly,
		daily
	} = props;

	return (
		<div className="app">
			<Slider settings={settings}>
				<div className='app__current'>
					{
						current()
					}
				</div>
				{/* <div className='app__hours'>
					{
						hourly()
					}
				</div> */}
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
