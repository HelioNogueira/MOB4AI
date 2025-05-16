import { useState, useEffect } from "react";
import { getBatteryData } from "../controllers/batteryController";
import { getTemperatureData } from "../controllers/temperatureController";
import BatteryChart from "../components/BatteryChart";
import CurrentChart from "../components/CurrentChart";
import CpuTempChart from "../components/CpuTempChart";
import TemperatureChart from "../components/TemperatureChart";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Dashboard.module.css";

const groupDataByInterval = (data, intervalMs = 10000) => {
  const grouped = new Map();

  data.forEach((entry) => {
    const timeGroup = Math.floor(entry.timestamp / intervalMs) * intervalMs;
    if (!grouped.has(timeGroup)) grouped.set(timeGroup, []);
    grouped.get(timeGroup).push(entry);
  });

  const result = [];
  for (const [timestamp, group] of grouped.entries()) {
    const avg = (key) =>
      group.reduce((sum, item) => sum + (item[key] ?? 0), 0) / group.length;

    result.push({
      timestamp,
      formattedTime: new Date(timestamp).toLocaleTimeString("pt-BR"),
      inst_curr: avg("inst_curr"),
      rem_cap: avg("rem_cap"),
      voltage: avg("voltage"),
      battery_level: avg("battery_level"),
      battery_status: group[0]?.battery_status,
      plug_type: group[0]?.plug_type,
      temp_bat: avg("temp_bat") / 1000,
      temp_cpu: avg("temp_cpu") / 1000,

    });
  }

  result.sort((a, b) => a.timestamp - b.timestamp);
  return result;
};

const mergeDataByTimestamp = (batteryData, tempData) => {
  return batteryData.map((bat) => {
    const closestTemp = tempData.reduce((prev, curr) =>
      Math.abs(curr.timestamp - bat.timestamp) < Math.abs(prev.timestamp - bat.timestamp)
        ? curr
        : prev
    );
    return {
      ...bat,
      temp_bat: closestTemp?.temp_bat,
      temp_cpu: closestTemp?.temp_cpu,
    };
  });
};

const Dashboard = () => {
  const [groupedData, setGroupedData] = useState([]);
  const [highlightedData, setHighlightedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const battery = await getBatteryData();
        const temperature = await getTemperatureData();

        if (!battery.length || !temperature.length) {
          throw new Error("Dados não disponíveis");
        }

        const merged = mergeDataByTimestamp(battery, temperature);
        const grouped = groupDataByInterval(merged);
        setGroupedData(grouped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  if (loading) return <p>Carregando dados...</p>;
  if (error) return <p>Erro ao carregar dados: {error}</p>;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarWrapper}>
        <Sidebar data={highlightedData} />
      </div>
      <div className={styles.chartWrapper}>
        <BatteryChart data={groupedData} onHover={setHighlightedData} />
        <TemperatureChart data={groupedData} onHover={setHighlightedData} />
        <CpuTempChart data={groupedData} onHover={setHighlightedData} />
        <CurrentChart data={groupedData} onHover={setHighlightedData} />
      </div>
    </div>
  );
};

export default Dashboard;
