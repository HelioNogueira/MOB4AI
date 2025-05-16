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
      <div
        style={{
          background: "#1e1e1e",
          color: "#fff",
          padding: 12,
          border: "1px solid #444",
          borderRadius: 6,
          fontSize: 14,
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <p><strong>Data:</strong> {formatDateTime(d.timestamp)}</p>
        <p><strong>Corrente Instantânea:</strong> {d.inst_curr?.toFixed(1)} mAh</p>
        <p><strong>Capacidade:</strong> {d.rem_cap?.toFixed(1)} %</p>
        <p><strong>Temperatura da Bateria:</strong> {d.temp_bat?.toFixed(1)} °C</p>
        <p><strong>Temperatura da CPU:</strong> {d.temp_cpu?.toFixed(1)} °C</p>
      </div>
    );
  }

  return null;
};

export default UnifiedTooltip;
