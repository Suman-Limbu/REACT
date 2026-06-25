import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/auth/authAction";


const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="email"
        value={formData.email}
        placeholder="enter email.."
      />
      <input
        onChange={handleChange}
        name="password"
        type="text"
        value={formData.password}
        placeholder="enter password.."
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
