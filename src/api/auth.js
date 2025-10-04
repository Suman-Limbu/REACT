import axios from 'axios';

const login = async ({email, password}) => {
  return (
await axios.get(`${config.apiUrl}/api/products`,{email,password})
  )
}

export { login };
