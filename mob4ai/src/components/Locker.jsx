const Locker = ({ info }) => {
  if (!info) return <p>Carregando dados...</p>;

  return (
    <div style={styles.locker}>
      <h3>Status Atual</h3>
      <ul>
        <li><strong>Hora:</strong> {info.formattedTime}</li>
        <li><strong>Nível:</strong> {info.battery_level}%</li>
        <li><strong>Voltagem:</strong> {info.voltage} V</li>
        <li><strong>Corrente:</strong> {info.current} mA</li>
        <li><strong>Status:</strong> {info.battery_status}</li>
        <li><strong>Plug:</strong> {info.plug_type}</li>
      </ul>
    </div>
  );
};

const styles = {
  locker: {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    maxWidth: "300px",
    margin: "0 auto 20px auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
};

export default Locker;
