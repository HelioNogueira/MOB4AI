import api from "../services/api";
import { formatBatteryData } from "../models/batteryModel";

export const getBatteryData = async () => {
  try {
    const res = await api.get("/battery");
    return formatBatteryData(res.data);
  } catch (error) {
    console.error("Erro ao buscar dados da bateria:", error);
    return [];
  }
};
