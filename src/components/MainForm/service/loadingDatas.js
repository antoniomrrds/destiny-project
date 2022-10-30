import Axios from '../../../config/Axios';
export const loadingDatas = async () => {
  const countriesResponse = await Axios.get(`/country`);
  const citiesResponse = await Axios.get(`/city`);

  return {
    countriesResponse,
    citiesResponse,
  };
};
