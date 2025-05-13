export const formatTemperatureData = (raw) => {
  return raw.map((item) => ({
    timestamp: item.timestamp,
    formattedTime: new Date(item.timestamp).toLocaleString("pt-BR"),
    temp_bat: item.temp_bat,
    temp_front: item.temp_front,
    temp_back: item.temp_back,
    temp_cpu: item.temp_cpu,
  }));
};
