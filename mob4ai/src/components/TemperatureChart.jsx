import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
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

const TemperatureChart = ({ data, onHover }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3 style={{ textAlign: "center" }}>Temperaturas (ºC)</h3>
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
            stroke="#ff7300"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="temp_cpu"
            stroke="#387908"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
