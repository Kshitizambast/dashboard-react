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
    plugins: {
        legend: {
          display: false,
          position: "top" as const
        },
        title: {
          display: false,
        }
      },
    scales: {
      y: {
        display:false,
        beginAtZero: true,
      },
      x: {
        display:false,
        beginAtZero: true,
      },
    },
  };
  
  export const data = {
    datasets: [
      {
        label: 'Blue dataset',
        data: Array.from({ length: 8 }, () => ({
          x: faker.datatype.number({ min: -100, max: 50 }),
          y: faker.datatype.number({ min: -100, max: 50 }),
          r: faker.datatype.number({ min: 5, max: 20 }),
        })),
        backgroundColor: 'rgba(44, 122, 228, 0.8)',
      },
    ],
  };

const SmallBubbleChart = () => {
  return (
    <div>
         <Bubble options={options} data={data} />
    </div>
  )
}

export default SmallBubbleChart