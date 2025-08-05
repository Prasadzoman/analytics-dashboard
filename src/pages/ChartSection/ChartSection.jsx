import React from "react";
import TrafficChart from "./TrafficChart";
import SpendChart from "./SpendChart";
import RevenueChart from "./RevenueChart";
import "./ChartSection.css";

const ChartSection = () => {
  return (
    <div className="chart-section">
      <h2>Analytics Overview</h2>
      <div className="charts-grid">
        <TrafficChart />
        <SpendChart />
        <RevenueChart />
      </div>
    </div>
  );
};

export default ChartSection;
