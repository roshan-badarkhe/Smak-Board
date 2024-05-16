import Chart from "chart.js/auto";
import { plugin } from "postcss";
import { Line } from "react-chartjs-2";
const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
// const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40, 91, 32, 10, 67, 90],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
};

const LineChart = () => {
  return (
    <div className="h-76 md:h-96 w-full">
      <Line options={options} data={data} />
    </div>
  );
};
export default LineChart;
