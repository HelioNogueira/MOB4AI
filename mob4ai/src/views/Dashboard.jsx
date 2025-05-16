import { useState, useEffect } from "react";
import { getBatteryData } from "../controllers/batteryController";
import { getTemperatureData } from "../controllers/temperatureController";
import BatteryChart from "../components/BatteryChart";
import CurrentChart from "../components/CurrentChart";


import CpuTempChart from "../components/CpuTempChart";

import TemperatureChart from "../components/temperatureChart";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const [batteryData, setBatteryData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [highlightedData, setHighlightedData] = useState(null);


  useEffect(() => {
    const fetch = async () => {
      const battery = await getBatteryData();
      const temperature = await getTemperatureData();
      setBatteryData(battery);
      setTemperatureData(temperature);
    };

    fetch();
  }, []);

  
  const lastTemperature = temperatureData[temperatureData.length - 1];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebarWrapper}>
        <Sidebar temperature={lastTemperature} />
      </div>
      <div className={styles.chartWrapper}>
      <BatteryChart data={batteryData} />
      <TemperatureChart data={temperatureData} />
      <CpuTempChart data={temperatureData} /> 
      <CurrentChart data={batteryData} />     

      </div>
    </div>
  );
};

export default Dashboard;

