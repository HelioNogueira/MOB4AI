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
  if (!data) return <h1>MOB4AI Dash</h1>;



  const {
    timestamp,
    plug_type,
    battery_status,
    voltage,
    inst_curr,
    temp_bat,
    temp_cpu,
    rem_cap,
  } = data;

  const formattedDate = new Date(timestamp).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className={styles.sidebar}>
      <h3>Dados Atuais</h3>
      <p><strong>Data:</strong> {formattedDate}</p>
      <p><strong>Plug Type:</strong> {plugTypeMap[plug_type] || "N/A"}</p>
      <p><strong>Status:</strong> {batteryStatusMap[battery_status] || "N/A"}</p>
      <p><strong>Voltage:</strong> {voltage} mV</p>
      <p><strong>Corrente Instantânea:</strong> {inst_curr} mAh</p>
      <p><strong>Capacidade:</strong> {rem_cap?.toFixed(1)} %</p>
      <p><strong>Temperatura da Bateria:</strong> {temp_bat} °C</p>
      <p><strong>Temperatura da CPU:</strong> {temp_cpu} °C</p>
    </div>
  );
};

export default Sidebar;

