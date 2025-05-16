import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
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
