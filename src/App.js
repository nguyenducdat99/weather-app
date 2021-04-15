// import style library, component
import './App.scss';
import * as statics from './constants/GlobalVariables';

function App(props) {

	// get props
	const {
		weekeend,
		current
	} = props;

	// convert data current
	const {
		temp,
		weather
	} = current;
	const tempC = Math.floor(temp - 273.15);
	const iconUrl = weather?(statics.iconUrl + weather[0].icon + '@2x.png'):'';
	const description = weather?weather[0].description:'';

	return (
		<div className="app">
			<div className="app-wrapper">
				<div className="app__option">
					<button type='button'
						className='app__option__btn'
					>
						<span className="fa fa-clock-o" aria-hidden="true"></span> Trong ngày
					</button>
					<button type='button'
						className='app__option__btn'
					>
						<span className="fa fa-calendar" aria-hidden="true"></span> Trong tuần
					</button>
					<button type='button'
						className='app__option__btn'
					>
						<span className="fa fa-calendar-check-o" aria-hidden="true"></span> Trong tháng
					</button>
				</div>
				<div className="app__body">
					<div className='app__body__contents'>
						<div className="app__body__contents__icon">
							<img src={iconUrl} alt="sun" />
						</div>
						<div className="app__body__contents__weather">
							<h3>Thành phố Hà Nội</h3>
							<p>
								<span className='temperature'>
									<b>{tempC}<sup>&#9900;</sup></b>
								</span>
								<span>{description}</span>
							</p>
						</div>
					</div>
					<div className='app__body__list-view'>
						{
							weekeend()
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
