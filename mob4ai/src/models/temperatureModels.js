export const formatTemperatureData = (raw) => {
  return raw.map((item) => ({
    timestamp: item.timestamp,
    formattedTime: new Date(item.timestamp).toLocaleString("pt-BR"),
    battery_temperature: item.battery_temperature,
    cpu_temperature: item.cpu_temperature,
  }));
};
