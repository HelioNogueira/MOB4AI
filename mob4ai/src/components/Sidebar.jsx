const Sidebar = ({ battery, temperature }) => {
  if (!battery || !temperature) return <p>Carregando...</p>;

  return (
    <aside style={styles.sidebar}>
      <h3>Status Geral</h3>
      <p><strong>Hora:</strong> {battery.formattedTime}</p>
      <p><strong>Nível:</strong> {battery.battery_level}%</p>
      <p><strong>Voltagem:</strong> {battery.voltage} V</p>
      <p><strong>Corrente:</strong> {battery.current} mA</p>
      <p><strong>Status:</strong> {battery.battery_status}</p>
      <p><strong>Plug:</strong> {battery.plug_type}</p>
      <hr />
      <p><strong>Temp. Bateria:</strong> {temperature.battery_temperature} ºC</p>
      <p><strong>Temp. CPU:</strong> {temperature.cpu_temperature} ºC</p>
    </aside>
  );
};

const styles = {
  sidebar: {
    background: '#e9e9e9',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '300px',
    marginBottom: '20px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  }
};

export default Sidebar;
