
import React from "react";
import { useDashboard } from "../../context/DashboardContext";
import MetricCard from "../MetricCard/MetricCard";
import "./Metrics.css";

const Metrics = () => {
  const { overviewMetrics, brandColors } = useDashboard();

  return (
    <div className="metrics-container">
      {overviewMetrics.map((metric, index) => (
        <MetricCard
          key={index}
          icon={metric.icon}
          label={metric.label}
          value={metric.value}
          accentColor={brandColors.accent}
        />
      ))}
    </div>
  );
};

export default Metrics;
