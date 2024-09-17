import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate();
  const [userName, setUserName] = useState({ name: "", password: "" });

  const handleChange = async () => {
    console.log(userName);

    try {
      const user = await axios.post(
        "http://localhost:3000/api/login",
        userName
      );
      navigate("/");
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={userName.name}
        onChange={(e) => setUserName({ ...userName, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="password"
        value={userName.password}
        onChange={(e) => setUserName({ ...userName, password: e.target.value })}
      />
      <button onClick={() => handleChange()}>sign in </button>
    </>
  );
};

export default SignIn;
