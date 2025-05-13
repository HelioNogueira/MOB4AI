import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const TemperatureChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h2 style={{ textAlign: "center" }}>Temperaturas (ºC)</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="formattedTime" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="battery_temperature"
            stroke="#ff7300"
            name="Bateria"
          />
          <Line
            type="monotone"
            dataKey="cpu_temperature"
            stroke="#387908"
            name="CPU"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
