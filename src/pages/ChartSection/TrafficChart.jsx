import React from "react";
import { Line } from "react-chartjs-2";
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


const TrafficChart = () => {
  const { weeklyVisitorsData } = useDashboard();

  const lineData = {
    labels: weeklyVisitorsData.map((d) => d.day),
    datasets: [
      {
        label: "Website Visitors",
        data: weeklyVisitorsData.map((d) => d.visitors),
        backgroundColor: "rgba(54, 162, 235, 0.3)",
        borderColor: "#36A2EB",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-box">
      <h3>Traffic This Week</h3>
      <Line data={lineData} options={chartOptions} />
    </div>
  );
};

export default TrafficChart;
