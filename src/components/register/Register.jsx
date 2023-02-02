import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddUser } from "../../action/LoginAction";
import "./register.css";
function Register() {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(AddUser({ name: nama, password: password, role: "guest" }));
    await localStorage.setItem(
      "user",
      JSON.stringify({ name: nama, password: password })
    );
    navigate("/");
    setNama("");
    setPassword("");
  }

  return (
    <>
      <div className="containerLogin">
        <form onSubmit={handleSubmit}>
          <div className="nameLogin">
            <label>Name</label>
            <input
              type="text"
              placeholder="name"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>
          <div className="nameLogin">
            <label>Password</label>
            <input
              type="password"
              placeholder="****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
