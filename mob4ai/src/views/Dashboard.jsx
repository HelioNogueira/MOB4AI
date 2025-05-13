import { useState, useEffect } from "react";
import { getBatteryData } from "../controllers/batteryController";
import { getTemperatureData } from "../controllers/temperatureController";
import BatteryChart from "../components/BatteryChart";
import TemperatureChart from "../components/temperatureChart";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const [batteryData, setBatteryData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const battery = await getBatteryData();
    const temperature = await getTemperatureData();
    setBatteryData(battery);
    setTemperatureData(temperature);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(); // carregamento inicial
  }, []);

  const lastBattery = batteryData[batteryData.length - 1];
  const lastTemperature = temperatureData[temperatureData.length - 1];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarWrapper}>
        <Sidebar battery={lastBattery} temperature={lastTemperature} />
        <button onClick={fetchData} style={styles.button}>
          🔄 Atualizar dados
        </button>
        {loading && <p>Atualizando...</p>}
      </div>
      <div className={styles.chartWrapper}>
        <BatteryChart data={batteryData} />
        <TemperatureChart data={temperatureData} />
      </div>
    </div>
  );
};

export default Dashboard;
