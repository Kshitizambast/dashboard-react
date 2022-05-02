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



interface Props {
  studentSpeechData: Array<any>
}

//labels -> timeDeffs.seconds

// Map -> sitData



const StudentSpeechChart: React.FC<Props> = (props) => {

  // const timeDiffs = [...new Set(props.timeDiff)];
  // const labels = timeDiffs;
  // const labels = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]

  const data = {
    datasets: [
      {
        label: 'Student Confidence',
        data: props.studentSpeechData,
        // type: "scatter",
        drawLine: true,
        fill: false,
        borderColor: 'rgb(113,202,124)',
        backgroundColor: 'rgba(113,202,124,0.5)',
        lineTension: 0.4,
      },
    ],
  };

  console.log('data', props.studentSpeechData);


  const options = {
    responsive: true,
    aspectRatio: 2.5,
    // elements:{
    //   point: {
    //     radius: 0
    //   }
    // },
    parsing: {
      xAxisKey: 'timeDiff.seconds',
      yAxisKey: ['speechInfo.studentSpeech'],
    },
    scales: {
      x: {
        display: true,
        ticks: {
          beginAtZero: true,
          max: 10,
          min: 0,
          stepSize: 0.1,
          callback: function (value: any) {
            // console.log('xVal', value);
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
        },
        grid: {
          display: false,
        },
      }
    },
    plugins: {
      afterDraw: function (chart: any) {
        //Create a line
        if (chart.tooltip?._active?.length) {
          let x = chart.tooltip._active[0].element.x;
          let yAxis = chart.scales.y;
          let ctx = chart.ctx;
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(x, yAxis.top);
          ctx.lineTo(x, yAxis.bottom);
          ctx.lineWidth = 1;
          ctx.strokeStyle = '#ff0000';
          ctx.stroke();
          ctx.restore();
        }
      },
      legend: {
        display: true
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

  // console.log('options', options);


  return (
    <Line options={options} data={data} />
  )
}

export default StudentSpeechChart
