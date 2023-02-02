import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../action/LoginAction";
import "./Login.css";
function Login() {
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [item, setItem] = useState([]);
  const dispatch = useDispatch();
  const { isSuccess, isError } = useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();
  async function success(done) {
    if (done) {
      navigate("/");
      await localStorage.setItem("user", JSON.stringify(item));
    } else {
      setError(isError);
    }
    setItem([]);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (nama !== "" && password !== "") {
      await dispatch(userLogin({ name: nama, password: password }));
      setItem({ name: nama, password: password });
      setNama("");
      setPassword("");
    } else {
      setMessage("Inputan tidak Boleh kosong");
    }
  }
  useEffect(() => {
    success(isSuccess);
  }, [isSuccess, isError]);
  return (
    <>
      <div className="containerLogin">
        <p>{error}</p>
        <p>{message}</p>
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
          <button type="submit">Sign In</button>
        </form>
        <div className="register">
          <p>
            Jika Belum Punya Akun bisa <Link to={"/register"}>Register</Link>{" "}
            Dahulu
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
