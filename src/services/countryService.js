import axios from "axios";

const API_URL = "https://restcountries.francocarballar.com/api/v1";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCountryByCode = async (code) => {
  try {
    const response = await axios.get(`${API_URL}/alpha/${code}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};