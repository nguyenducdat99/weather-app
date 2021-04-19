import { useState } from 'react';
import { Line } from 'react-chartjs-2'
import * as HandleData from '../../../commons/handleDataChart';
import './Chart.scss';

function TempChart(props) {
    // get props
    const {
        hourly,
        typeTemp
    } = props;

    // declare state component
    const [page, setPage] = useState(0);

    const step = 8;
    const start = page*step;
    const end = (page+1)*step;
    const max = (hourly.length%step===0)?(hourly.length/step-1):Math.floor(hourly.length/step);
    const hourlySlice = hourly.slice(start,end);
    const labels = HandleData.getLabels(hourlySlice);
    const feelsLike = HandleData.getFeelsLike(hourlySlice,typeTemp);
    const temp = HandleData.getTemp(hourlySlice,typeTemp);
    const dewPoint = HandleData.getDewPoint(hourlySlice,typeTemp);

    // handle when page up
    const onPageUp = () => {
        if (page===max) return;
        setPage(page+1)
    }
    // handle when page up
    const onPageDown = () => {
        if (page===0) return;
        setPage(page-1)
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: typeTemp?'Dễ chịu (độ C)':'Dễ chịu (độ K)',
                data: feelsLike,
                fill: false,
                borderColor: 'white'
            },
            {
                label: typeTemp?'Nhiệt độ (độ C)':'Nhiệt độ (độ K)',
                data: temp,
                fill: false,
                borderColor: 'blue'
            },
            {
                label: typeTemp?'Nhiệt độ có sương (độ C)':'Nhiệt độ có sương (độ K)',
                data: dewPoint,
                fill: false,
                borderColor: 'purple',
            },
        ]
    }

    return (
        <div className='temp-chart'>
            <Line 
                data={{...data}}
                options={
                    {
                        maintainAspectRatio: false
                    }
                }
                height={350}
            />
            <div className='temp-chart__pagination'>
                <button type='text'
                    className='btn'
                    onClick={onPageDown}
                >
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
                <span>Xem thêm</span>
                <button type='text'
                    className='btn'
                    onClick={onPageUp}
                >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default TempChart;