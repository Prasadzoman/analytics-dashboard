import React from "react";
import { Doughnut } from "react-chartjs-2";
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


const SpendChart = () => {
  const { platformPerformance } = useDashboard();

  const doughnutData = {
    labels: platformPerformance.map((item) => item.platform),
    datasets: [
      {
        label: "Ad Spend",
        data: platformPerformance.map((item) => item.performance),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        borderColor: "#ffffff",
        borderWidth: 1.5,
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="chart-box">
      <h3>Spend by Channel</h3>
      <Doughnut data={doughnutData} options={chartOptions} />
    </div>
  );
};

export default SpendChart;
