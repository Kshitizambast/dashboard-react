import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import faker from '@faker-js/faker';


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
        barThickness: 0.2,  // number (pixels) or 'flex'maxBarThickness: 8 // number (pixels)
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgba(44, 122, 228, 0.8)',
        backgroundColor: 'rgba(44, 122, 228, 0.8)',
        lineTension: 0.5,
       
      },
    ],
  };

const SmallLineChart = () => {
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default SmallLineChart