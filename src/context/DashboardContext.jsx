import React, { createContext, useContext, useEffect, useState } from "react";

const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [overviewMetrics, setOverviewMetrics] = useState([
    { label: "Total Revenue", value: "$1.2M", icon: "💰" },
    { label: "Total Campaigns", value: "328", icon: "📈" },
    { label: "Total Impressions", value: "98.3M", icon: "👁️" },
    { label: "Ad Clicks", value: "1.23M", icon: "🖱️" },
    { label: "Conversion Rate", value: "4.3%", icon: "🎯" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOverviewMetrics((prevMetrics) =>
        prevMetrics.map((metric) => ({
          ...metric,
          value: updateMetricValue(metric.value),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const updateMetricValue = (value) => {
    if (typeof value === "number") {
      const delta = Math.floor(Math.random() * 20) - 10;
      return Math.max(0, value + delta);
    }

    const numericPart = parseFloat(value.toString().replace(/[^\d.\-]/g, ""));
    const unit = value.toString().replace(/[\d.\-]/g, "");

    if (!isNaN(numericPart)) {
      const delta = Math.floor(Math.random() * 20) - 10;
      const updated = Math.max(0, numericPart + delta);

      if (unit.includes("%")) return `${updated.toFixed(1)}%`;
      if (unit.toLowerCase().includes("m")) return `${updated.toFixed(2)}M`;
      if (unit.toLowerCase().includes("k")) return `${updated.toFixed(2)}K`;
      return `$${updated.toLocaleString()}`;
    }

    return value;
  };

  const initialWeeklyVisitors = [
    { day: "Mon", visitors: 120 },
    { day: "Tue", visitors: 190 },
    { day: "Wed", visitors: 170 },
    { day: "Thu", visitors: 220 },
    { day: "Fri", visitors: 260 },
    { day: "Sat", visitors: 300 },
    { day: "Sun", visitors: 280 },
  ];

  const [weeklyVisitorsData, setWeeklyVisitorsData] = useState(initialWeeklyVisitors);

  useEffect(() => {
    const interval = setInterval(() => {
      setWeeklyVisitorsData((prev) =>
        prev.map((item) => ({
          ...item,
          visitors: Math.max(100, item.visitors + Math.floor(Math.random() * 40 - 20)),
        }))
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const initialRevenueData = [
    { month: "Jan", revenue: 85000 },
    { month: "Feb", revenue: 92000 },
    { month: "Mar", revenue: 107000 },
    { month: "Apr", revenue: 99000 },
    { month: "May", revenue: 115000 },
    { month: "Jun", revenue: 130000 },
    { month: "Jul", revenue: 127000 },
    { month: "Aug", revenue: 138000 },
  ];

  const [monthlyRevenueData, setMonthlyRevenueData] = useState(initialRevenueData);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonthlyRevenueData((prev) =>
        prev.map((item) => ({
          ...item,
          revenue: Math.max(0, item.revenue + Math.floor(Math.random() * 1000 - 500)),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const initialCampaigns = [
    {
      name: "Summer Sale 2025",
      platform: "Instagram",
      impressions: 12000000,
      clicks: 320000,
      conversions: 5400,
      revenue: 125000,
    },
    {
      name: "AI Webinar Ads",
      platform: "LinkedIn",
      impressions: 4200000,
      clicks: 90000,
      conversions: 2100,
      revenue: 78000,
    },
    {
      name: "Gaming Fest",
      platform: "YouTube",
      impressions: 9100000,
      clicks: 140000,
      conversions: 3600,
      revenue: 94000,
    },
  ];

  const [topCampaigns, setTopCampaigns] = useState(initialCampaigns);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopCampaigns((prev) =>
        prev.map((campaign) => ({
          ...campaign,
          impressions: campaign.impressions + Math.floor(Math.random() * 100000),
          clicks: campaign.clicks + Math.floor(Math.random() * 5000),
          conversions: campaign.conversions + Math.floor(Math.random() * 500),
          revenue: parseFloat((campaign.revenue + Math.random() * 5000).toFixed(2)),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const platformPerformance = [
    { platform: "Google Ads", performance: 240000 },
    { platform: "Facebook Ads", performance: 170000 },
    { platform: "Instagram", performance: 200000 },
    { platform: "LinkedIn", performance: 100000 },
    { platform: "YouTube", performance: 190000 },
  ];

  const brandColors = {
    primary: "#4A90E2",
    accent: "#e6d011ff",
    background: "#1C1C1C",
    text: "#FFFFFF",
    cardBackground: "#2A2A2A",
  };

  return (
    <DashboardContext.Provider
      value={{
        overviewMetrics,
        monthlyRevenueData,
        topCampaigns,
        platformPerformance,
        weeklyVisitorsData,
        brandColors,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
