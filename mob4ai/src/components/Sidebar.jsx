import React from "react";
import styles from "../styles/Sidebar.module.css";

const plugTypeMap = {
  0: "Unplugged",
  1: "AC",
  2: "USB",
  3: "Wireless",
};

const batteryStatusMap = {
  1: "Unknown",
  2: "Charging",
  3: "Discharging",
  4: "Not Charging",
  5: "Full",
  6: "Wireless",
};

const Sidebar = ({ data }) => {
  if (!data) return <div className={styles.sidebar}>Passe o mouse nos gráficos</div>;

  const {
    timestamp,
    plug_type,
    battery_status,
    voltage,
    inst_curr,
    temp_bat,
    temp_cpu,
  } = data;

  const formattedDate = new Date(timestamp).toLocaleString("pt-BR");

  return (
    <div className={styles.sidebar}>
      <h3>Dados Atuais</h3>
      <p><strong>Data:</strong> {formattedDate}</p>
      <p><strong>Plug Type:</strong> {plugTypeMap[plug_type] || "N/A"}</p>
      <p><strong>Status:</strong> {batteryStatusMap[battery_status] || "N/A"}</p>
      <p><strong>Voltage:</strong> {voltage} mV</p>
      <p><strong>Corrente:</strong> {inst_curr} mAh</p>
      <p><strong>Temp. Bateria:</strong> {temp_bat} °C</p>
      <p><strong>Temp. CPU:</strong> {temp_cpu} °C</p>
      
    </div>
  );
};

export default Sidebar;
