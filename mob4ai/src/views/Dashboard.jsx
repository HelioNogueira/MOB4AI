import Locker from "../components/Locker";

const Dashboard = () => {
  const [batteryData, setBatteryData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getBatteryData();
      setBatteryData(data);
    };
    fetch();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Locker info={batteryData[batteryData.length - 1]} />
      <BatteryChart data={batteryData} />
    </div>
  );
};
