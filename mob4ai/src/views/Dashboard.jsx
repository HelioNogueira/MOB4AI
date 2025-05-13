import styles from "../styles/Dashboard.module.css";
import Sidebar from "../components/Sidebar";
import BatteryChart from "../components/BatteryChart";
import TemperatureChart from "../components/TemperatureChart";
import { getBatteryData } from "../controllers/batteryController";
import { getTemperatureData } from "../controllers/temperatureController";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [batteryData, setBatteryData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setBatteryData(await getBatteryData());
      setTemperatureData(await getTemperatureData());
    };
    fetch();
  }, []);

  const lastBattery = batteryData[batteryData.length - 1];
  const lastTemp = temperatureData[temperatureData.length - 1];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarWrapper}>
        <Sidebar battery={lastBattery} temperature={lastTemp} />
      </div>
      <div className={styles.chartWrapper}>
        <BatteryChart data={batteryData} />
        <TemperatureChart data={temperatureData} />
      </div>
    </div>
  );
};

export default Dashboard;
