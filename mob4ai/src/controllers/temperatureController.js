import api from "../services/api";
import { formatTemperatureData } from "../models/temperatureModel";

export const getTemperatureData = async () => {
  try {
    const res = await api.get("/temperature");
    return formatTemperatureData(res.data);
  } catch (error) {
    console.error("Erro ao buscar dados de temperatura:", error);
    return [];
  }
};
