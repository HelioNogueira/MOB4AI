import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TemperatureChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ textAlign: "center" }}>Temperaturas (ºC)</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formattedTime" />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => `Data: ${label}`}
            formatter={(value, name) => {
              const unidades = {
                temp_bat: "Temp. Bateria",
                temp_cpu: "Temp. CPU",
              };
              return [`${value} ºC`, unidades[name] || name];
            }}
          />
          <Line
            type="monotone"
            dataKey="temp_bat"
            stroke="#ff7300"
            name="Temp. Bateria"
          />
          <Line
            type="monotone"
            dataKey="temp_cpu"
            stroke="#387908"
            name="Temp. CPU"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
