import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL

export const signUpUserToApi = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/signup`, user);
  try {
    console.log(response.data);
    if (response.data.user) {
      localStorage.setItem('jwtpethelpers', JSON.stringify(response.data))
    }
  } catch (error) {
    console.log(error);
  }
  return response;
}
