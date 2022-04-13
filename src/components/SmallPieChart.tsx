import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const options = {
  responsive: true,
  aspectRatio: 2,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    }
  }
};

export const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(44, 122, 228, 0.6)",
        "rgba(44, 122, 228, 0.8)",
        "rgba(44, 122, 228, 0.4)"
      ],

      borderWidth: 1,
      weight: 1,
    }
  ]
};

const SmallPieChart:React.FC = () => {
  return (
        <Pie data={data} options={options} />
  )
}

export default SmallPieChart