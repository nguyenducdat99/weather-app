// import style library, component
import './App.scss';
import sun from './statics/images/sun.png';
import Weekend from './components/weekend/Weekend';


function App(props) {

	// get props
	const {
		weekeend
	} = props;

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
							<img src={sun} alt="sun" />
						</div>
						<div className="app__body__contents__weather">
							<h3>Thành phố Hà Nội</h3>
							<p>
								<span className='temperature'>
									<b>20<sup>&#9900;</sup></b>
								</span>
								<span>Có mưa nhỏ</span>
							</p>
						</div>
					</div>
					<div className='app__body__list-view'>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
