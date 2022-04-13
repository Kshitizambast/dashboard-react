import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import zoomPlugin from 'chartjs-plugin-zoom'
  import faker from "@faker-js/faker";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    zoomPlugin
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
        display: false
      },
      title: {
        display: false
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true // SET SCROOL ZOOM TO TRUE
          },
          mode: "xy",
          speed: 100
        },
        pan: {
          enabled: true,
          mode: "xy",
          speed: 100
        }
      }
    }
  };
  
  const labels = ["Week1", "Week2", "Week3", "Week4", "Week5", "Week6", "Week7", "Week8", "Week9"];
  
  export const data = {
    labels,
    datasets: [
        {
          label: 'Dataset 1',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
          fill: false,
          borderColor: 'rgb(113,202,124)',
          backgroundColor: 'rgb(113,202,124,0.5)',
          lineTension: 0.5,
        },
        {
          label: 'Dataset 2',
          data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
          borderColor: 'rgb(53, 162, 235)',
          fill: false,
          backgroundColor: 'rgba(53, 162, 235, 0.3)',
          lineTension: 0.5,
        },
      ],
  };
  

const BigLineChart = () => {
  return (
    <Line options={options} data={data} />
  )
}

export default BigLineChart