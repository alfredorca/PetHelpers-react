import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL

export const getSpeciesFromApi =  async () => {
  const response = await axios.get(`${apiUrl}/species`);
  return response;
}

export const postSpeciesToApi = async (species) => {
  const response = await axios.post(`${apiUrl}/species/singlespecies`, species);
  return response;
}

export const deleteSpeciesFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/species/singlespecies/${id}`);
  return response;
}