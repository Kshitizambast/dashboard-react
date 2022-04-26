import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import faker from '@faker-js/faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// export const options = {
//     scales: {
//         y: {
//             beginAtZero: true,
//         },
//     },
// };

// export const data = {
//     datasets: [
//         {
//             label: 'A dataset',
//             data: Array.from({ length: 100 }, () => ({
//                 x: faker.datatype.number({ min: -100, max: 100 }),
//                 y: faker.datatype.number({ min: -100, max: 100 }),
//             })),
//             backgroundColor: 'rgba(255, 99, 132, 1)',
//         },
//     ],
// };


interface Props {
    instructorMovementData: Array<any>
}

const BigScatterChart: React.FC<Props> = (props) => {
    const data = {
        datasets: [
            {
                label: 'Teacher Movement',
                data: props.instructorMovementData,
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
        ],

    }

    const options = {
        responsive: true,
        aspectRatio: 2.5,
        parsing: {
        xAxisKey: 'timestamp.seconds',
        yAxisKey: 'xPos',
        },
        scales: {
            x: {
              display: true,
              ticks: {
                beginAtZero: true,
                max: 10,
                min: 0,
                stepSize: 0.5,
                callback: function (value:any) {
                  
                  return value + 's';
                }
      
              },
              grid: {
                display: false,
              },
              color: 'blue',
              type: 'linear'
      
              // number (pixels) or 'flex'maxBarThickness: 8 // number (pixels)
            },
            y: {
              display: true,
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 1,
                color: 'blue',
                // callback: function (value: any) {
                //   console.log('value', value);
                //   return (value / this.max * 100).toFixed(0) + '%';
                // }
              },
              grid: {
                display: false,
              },
            },
        },

    };
    return (
        <Scatter options={options} data={data} />
    )
}

export default BigScatterChart