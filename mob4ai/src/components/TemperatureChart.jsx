import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UnifiedTooltip from "./UnifiedTooltip";

const TemperatureChart = ({ data, onHover }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ textAlign: "center" }}>Temperaturas (°C)</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formattedTime" />
          <YAxis />
          <Tooltip
            content={<UnifiedTooltip />}
            isAnimationActive={false}
            onMouseMove={(e) => {
              if (e?.activePayload?.[0]?.payload) {
                onHover?.(e.activePayload[0].payload);
              }
            }}
          />
          <Line
            type="monotone"
            dataKey="temp_bat"
            name="Temperatura Bateria"
            stroke="#00C49F"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="temp_cpu"
            name="Temperatura CPU"
            stroke="#FF8042"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
