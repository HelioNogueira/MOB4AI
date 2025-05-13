import { getBatteryData } from '../controllers/batteryController';
import BatteryChart from '../components/BatteryChart';

// Dentro do JSX

useEffect(() => {
  const fetch = async () => {
    const data = await getBatteryData();
    setBatteryData(data);
  };
  fetch();
}, []);
