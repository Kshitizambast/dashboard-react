import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bubble } from 'react-chartjs-2';
  import faker from '@faker-js/faker';
  
  ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
  
  export const options = {
    responsive: true,
    aspectRatio: 3.2,
    scales: {
      x: {
        display: true,
        grid: {
            display: false,
        },
        color: 'blue'
         // number (pixels) or 'flex'maxBarThickness: 8 // number (pixels)
      },
      y: {
        display: true,
        grid: {
            display: false,
        },
      }
    },
    plugins: {
        legend: {
          display: false,
          position: "top" as const
        },
        title: {
          display: false,
        }
      },
  };
  
  export const data = {
    datasets: [
      {
        label: 'Blue dataset',
        data: Array.from({ length: 20 }, () => ({
          x: faker.datatype.number({ min: -100, max: 50 }),
          y: faker.datatype.number({ min: -100, max: 50 }),
          r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(44, 122, 228, 0.8)',
      },
    ],
  };


const BigBubbleChart = () => {
  return (
    <div>
            <Bubble options={options} data={data} />
    </div>
  )
}

export default BigBubbleChart