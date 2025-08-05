
import React from "react";

const MetricCard = ({ icon, label, value, accentColor }) => {
  return (
    <div className="metric-card" style={{ borderColor: accentColor }}>
      <div className="metric-icon">{icon}</div>
      <div className="metric-label">{label}</div>
      <div className="metric-value" style={{ color: accentColor }}>
        {value}
      </div>
    </div>
  );
};

export default MetricCard;
