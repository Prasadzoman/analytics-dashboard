import { useDashboard } from "../context/DashboardContext";

const handleExportCSV = () => {
  const { overviewMetrics } = useDashboard();

  const csvContent = [
    ["Label", "Value"],
    ...overviewMetrics.map((m) => [m.label, m.value]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "metrics.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default handleExportCSV;
