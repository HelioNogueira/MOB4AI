export const formatBatteryData = (raw) => {
  const plugTypes = {
    0: "Unplugged",
    1: "AC",
    2: "USB",
    3: "Wireless",
  };

  const batteryStatuses = {
    1: "Unknown",
    2: "Charging",
    3: "Discharging",
    4: "Not Charging",
    5: "Full",
    6: "Wireless",
  };

  return raw.map((item) => ({
    timestamp: item.timestamp,
    formattedTime: new Date(item.timestamp).toLocaleString("pt-BR"),
    rem_cap: item.rem_cap,
    inst_curr: item.inst_curr,
    voltage: (item.voltage / 1000).toFixed(2), 
    battery_level: item.battery_level,
    plug_type: plugTypes[item.plug_type],
    battery_status: batteryStatuses[item.battery_status],
  }));
};

