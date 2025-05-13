export const formatBatteryData = (raw) => {
  return raw.map((item) => ({
    timestamp: item.timestamp,
    formattedTime: new Date(item.timestamp).toLocaleString("pt-BR"),
    inst_curr: item.inst_curr,
    battery_level: item.battery_level,
    voltage: item.voltage,
    rem_cap: item.rem_cap,
    plug_type: item.plug_type,
    battery_status: item.battery_status,
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
