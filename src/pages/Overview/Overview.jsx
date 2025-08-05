import React from 'react';
import Metrics from '../Metrics/Metrics';
import ChartSection from '../ChartSection/ChartSection';
import CampaignsPage from '../CampaignsPage/CampaignsPage';
import { useDashboard } from '../../context/DashboardContext';
import './Overview.css';

const Overview = () => {
  const { overviewMetrics } = useDashboard();

  const handleExportCSV = () => {
    const csvContent = [
      ['Label', 'Value'],
      ...overviewMetrics.map((m) => [m.label, m.value]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'metrics.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="overview-container">
      <section id="metrics">
        <Metrics />
      </section>

      <section id="charts">
        <ChartSection />
      </section>

      <section id="campaigns">
        <CampaignsPage />
        <button
          onClick={handleExportCSV}
          className="export-btn"
        >
          Export CSV
        </button>
      </section>
    </div>
  );
};

export default Overview;
