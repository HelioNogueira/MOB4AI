import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UnifiedTooltip from "./UnifiedTooltip";

const CurrentChart = ({ data, onHover }) => (
  <div>
    <h3 style={{ textAlign: "center" }}>Corrente Instantânea</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
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
          dataKey="inst_curr"  // ⚠️ importante!
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CurrentChart;
