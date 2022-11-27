import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { email, password } = formData;

  return (
    <form>
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
