
export const chartOptions = {
  plugins: {
    legend: {
      labels: { color: "#fff" },
    },
    background: {
      id: "custom_canvas_background",
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    },
    customCanvasBackgroundColor: {},
  },
  scales: {
    x: {
      ticks: { color: "#fff" },
      grid: { color: "rgba(255,255,255,0.2)" },
    },
    y: {
      ticks: { color: "#fff" },
      grid: { color: "rgba(255,255,255,0.2)" },
    },
  },
};
