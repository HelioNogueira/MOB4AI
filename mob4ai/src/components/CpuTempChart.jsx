import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const formatDateTime = (timestamp) =>
  new Date(timestamp).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const UnifiedTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const d = payload[0].payload;
    return (
      <div style={{ background: "#fff", padding: 10, border: "1px solid #ccc" }}>
        <p><strong>Data:</strong> {formatDateTime(d.timestamp)}</p>
        <p><strong>Corrente Instantânea:</strong> {d.inst_curr} mAh</p>
        <p><strong>Capacidade:</strong> {d.rem_cap?.toFixed(1)} %</p>
        <p><strong>Temperatura da Bateria:</strong> {d.temp_bat} °C</p>
        <p><strong>Temperatura da CPU:</strong> {d.temp_cpu} °C</p>
      </div>
    );
  }
  return null;
};

const CpuTempChart = ({ data, onHover }) => (
  <div>
    <h3 style={{ textAlign: "center" }}>Temperatura da CPU</h3>
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
          dataKey="temp_cpu"
          stroke="#FF8042"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CpuTempChart;
