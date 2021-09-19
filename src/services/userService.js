import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getUserFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/users/user/${id}`);
  return response;
};

export const getUserPetsFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/users/user/${id}`);
  return response.data;
};

export const postPetToApi = async (pet) => {
  const response = await axios.post(`${apiUrl}/pets/pet`, pet);
  return response;
};

export const deletePetFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/pets/pet/${id}`);
  return response;
};
