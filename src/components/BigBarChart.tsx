import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import faker from '@faker-js/faker';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
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
    }
  };
  
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  
  export const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
        backgroundColor: "rgba(44, 122, 228, 0.8)",
        borderWidth: 1,
        innerWidth: 25,
        barThickness:10,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false
      }
    ]
  };

const BigBarChart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BigBarChart