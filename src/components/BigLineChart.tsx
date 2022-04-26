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
  sitAndStandData: Array<any>
}

//labels -> timeDeffs.seconds

// Map -> sitData



const BigLineChart: React.FC<Props> = (props) => {

  // const timeDiffs = [...new Set(props.timeDiff)];
  // const labels = timeDiffs;
  // const labels = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]

  const data = {
    datasets: [
      {
        label: 'Sit',
        data: props.sitAndStandData,
        // type: "scatter",
        drawLine: true,
        fill: true,
        borderColor: 'rgb(113,202,124)',
        backgroundColor: 'rgba(113,202,124,0.5)',
        lineTension: 0.4,
      },


      {
        label: 'Stand',
        data: props.sitAndStandData,
        borderColor: 'rgb(53, 162, 235)',
        fill: true,
        backgroundColor: 'rgba(53, 162, 235, 0.3)',
        lineTension: 0.4,
      },
    ],
  };

  console.log('data', data);


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
      yAxisKey: ['sitStand.sitNumber', 'sitStand.standNumber'],
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
          callback: function (value: any) {
            // console.log('value', value);
            return (value / this.max * 100).toFixed(0) + '%';
          }
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

export default BigLineChart
// import React, { PureComponent } from 'react';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];



// const BigLineChart = () =>  {

//     return (
//       <ResponsiveContainer  aspect={3.2}>
//         <AreaChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
//           <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
//           <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
//         </AreaChart>
//       </ResponsiveContainer>
//     );
// }
//  export default BigLineChart