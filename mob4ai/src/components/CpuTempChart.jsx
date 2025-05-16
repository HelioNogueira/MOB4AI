import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const formatDate = (timestamp) =>
  new Date(timestamp).toLocaleString("pt-BR");

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const d = payload[0].payload;
    return (
      <div style={{ background: "#fff", padding: 10, border: "1px solid #ccc" }}>
        <p><strong>Data:</strong> {formatDate(d.timestamp)}</p>
        <p><strong>Temp. CPU:</strong> {d.temp_cpu} °C</p>
        <p><strong>Temp. Bateria:</strong> {d.temp_bat} °C</p>
      </div>
    );
  }
  return null;
};

const CpuTempChart = ({ data }) => (
  <div>
    <h3>Temperatura da CPU</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(t) => new Date(t).toLocaleTimeString("pt-BR")}
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="temp_cpu" stroke="#FF8042" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CpuTempChart;
