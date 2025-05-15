import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CpuTemperatureChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ textAlign: "center" }}>Temperatura da CPU (°C)</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formattedTime" />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => `Data: ${label}`}
            formatter={(value, name) => [`${value} °C`, "Temp. CPU"]}
          />
          <Line
            type="monotone"
            dataKey="temp_cpu"
            stroke="#ff9800"
            dot={false}
            name="Temp. CPU"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CpuTemperatureChart;
