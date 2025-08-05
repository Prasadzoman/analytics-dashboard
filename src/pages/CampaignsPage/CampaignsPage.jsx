"use client";
import React from "react";
import { DataTable } from "../DataTable/DataTable";
import { useDashboard } from "../../context/DashboardContext"; 
import "./CampaignsPage.css"; 

export default function CampaignsPage() {
  const { topCampaigns } = useDashboard();

  const columns = [
    {
      header: "Campaign Name",
      accessorKey: "name",
    },
    {
      header: "Platform",
      accessorKey: "platform",
    },
    {
      header: "Impressions",
      accessorKey: "impressions",
    },
    {
      header: "Clicks",
      accessorKey: "clicks",
    },
    {
      header: "Conversions",
      accessorKey: "conversions",
    },
    {
      header: "Revenue",
      accessorKey: "revenue",
    },
  ];

  return (
    <div className="campaigns-container" id="campaign">
      <h1 className="campaigns-title">Top Campaigns</h1>
      <DataTable columns={columns} data={topCampaigns} />
    </div>
  );
}
