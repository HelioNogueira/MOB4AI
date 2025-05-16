import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import UnifiedTooltip from "./UnifiedTooltip";

const BatteryChart = ({ data, onHover }) => (
  <div style={{ width: "100%", height: 300 }}>
    <h2 style={{ textAlign: "center" }}>Nível da Bateria (%)</h2>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="formattedTime" />
        <YAxis domain={[0, 100]} />
        <Tooltip
          content={<UnifiedTooltip />}
          isAnimationActive={false}
          onMouseMove={(e) => {
            if (e?.activePayload?.[0]?.payload) {
              onHover?.(e.activePayload[0].payload);
            }
          }}
        />
        <Line type="monotone" dataKey="battery_level" stroke="#8884d8" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default BatteryChart;
