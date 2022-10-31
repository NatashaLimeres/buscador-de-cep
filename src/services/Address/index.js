import api from "../../config/axios";

export async function getAddress({ input }) {
  const response = await api.get(`${input}/json`);
  return response.data;
}
