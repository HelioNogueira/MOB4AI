import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BatteryChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2 style={{ textAlign: "center" }}>Nível da Bateria (%)</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="formattedTime" />
          <YAxis domain={[0, 100]} />
          <Tooltip
            formatter={(value, name) => [`${value}%`, "Bateria"]}
            labelFormatter={(label) => `Hora: ${label}`}
          />
          <Line type="monotone" dataKey="battery_level" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BatteryChart;
