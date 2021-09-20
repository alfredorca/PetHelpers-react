import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL

export const getPetsFromApi =  async (id) => {
  const response = await axios.get(`${apiUrl}/pets/pet/${id}`);
  return response;
}

export const getAllPetsFromApi = async () => {
  const response = await axios.get(`${apiUrl}/pets`)
  return response;
}

export const postPetToApi = async (pet) => {
  const {user: {_id}} = JSON.parse(localStorage.getItem('jwtpethelpers'));
  const response = await axios.post(`${apiUrl}/pets/pet/${_id}`, pet);
  return response;
}

export const deletePetFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/pets/pet/${id}`);
  return response;
}