import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(
      `${API_URL}/all?fields=name,flags,capital,cca3,population,region,subregion,currencies,timezones,maps`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const getCountryByCode = async (code) => {
  try {
    const response = await axios.get(
      `${API_URL}/alpha/${code}`
    );

    return response.data[0];
  } catch (error) {
    console.error("Error fetching country:", error);
    return null;
  }
};

export const getExchangeRate = async (
  baseCurrency
) => {
  try {
    const response = await axios.get(
      `https://open.er-api.com/v6/latest/${baseCurrency}`
    );

    return response.data.rates;
  } catch (error) {
    console.error(
      "Error fetching exchange rates:",
      error
    );
    return {};
  }
};