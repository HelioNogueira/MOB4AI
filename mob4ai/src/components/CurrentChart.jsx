import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CurrentChart = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ textAlign: "center" }}>Corrente Instantânea (mAh)</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formattedTime" />
          <YAxis />
          <Tooltip
            labelFormatter={(label) => `Data: ${label}`}
            formatter={(value, name) => [`${value} mAh`, "Corrente"]}
          />
          <Line
            type="monotone"
            dataKey="inst_curr"
            stroke="#ff0000"
            dot={false}
            name="Corrente"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CurrentChart;
