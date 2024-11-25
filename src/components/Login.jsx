import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyLogin } from "../store/uiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(
      verifyLogin({
        user: email,
        pass: password,
      })
    );

    if (email === "sebas" && password === "1234") {
      navigate("/consult");
    } else {
      toast.error("Credenciales incorrectas");
    }
  };

  useEffect(() => {
    localStorage.removeItem('isAuthenticate')
  }, [])
  

  return (
    <section id="loginSection">
      <div className="container-fluid vh-100">
        <div className="row justify-content-end align-items-center">
          <div className="card-shadow loginClass">
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <div className="mb-3">
              <label className="form-label">Usuario</label>
              <input
                className="form-control"
                id="email"
                placeholder="Ingrese su usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
