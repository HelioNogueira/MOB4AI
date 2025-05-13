import { useState, useEffect } from "react";
import { getBatteryData } from "../controllers/batteryController";
import { getTemperatureData } from "../controllers/temperatureController";
import BatteryChart from "../components/BatteryChart";
import TemperatureChart from "../components/TemperatureChart";
import Locker from "../components/Locker";

const Dashboard = () => {
  const [batteryData, setBatteryData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const battery = await getBatteryData();
      const temp = await getTemperatureData();
      setBatteryData(battery);
      setTemperatureData(temp);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Locker info={batteryData[batteryData.length - 1]} />
      <BatteryChart data={batteryData} />
      <TemperatureChart data={temperatureData} />
    </div>
  );
};

export default Dashboard;
