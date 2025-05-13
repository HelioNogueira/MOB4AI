export const formatBatteryData = (raw) => {
  return raw.map((item) => ({
    timestamp: item.timestamp,
    formattedTime: new Date(item.timestamp).toLocaleString("pt-BR"),
    battery_level: item.battery_level,
    battery_status: batteryStatusMap[item.battery_status] || "Desconhecido",
    plug_type: plugTypeMap[item.plug_type] || "Desconhecido",
    voltage: item.voltage,
    current: item.current,
  }));
};

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
