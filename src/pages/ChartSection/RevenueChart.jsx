import React from "react";
import { Bar } from "react-chartjs-2";
import { useDashboard } from "../../context/DashboardContext";
import { chartOptions } from "./chartConfig";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);


const RevenueChart = () => {
  const { monthlyRevenueData } = useDashboard();

  const barData = {
    labels: monthlyRevenueData.map((item) => item.month),
    datasets: [
      {
        label: "Revenue (in $)",
        data: monthlyRevenueData.map((item) => item.revenue),
        backgroundColor: "#7D5FFF",
        borderColor: "#ffffff",
        borderWidth: 1.5,
        borderRadius: 6,
        barThickness: 40,
      },
    ],
  };

  return (
    <div className="chart-box">
      <h3>Monthly Revenue</h3>
      <Bar data={barData} options={chartOptions} />
    </div>
  );
};

export default RevenueChart;
