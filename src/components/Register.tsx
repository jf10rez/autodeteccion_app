import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVehicle } from "../store/uiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [placa, setPlaca] = useState("");
  const [id, setId] = useState("");
  const [type, setType] = useState("a");
  const [selectedOption, setSelectedOption] = useState("a");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRegister = () => {
    if (!placa || !id || !type) {
      return toast.error("Debe ingresar todos los datos");
    }
    dispatch(
      addVehicle({
        id,
        type,
        placa,
      })
    );
    setPlaca("");
    setId("");
    setType("a");
    navigate("/consult");
  };

  return (
    <section id="RegistrarSection">
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow p-4" style={{ width: "24rem" }}>
          <h2 className="text-center mb-4">Registro de vehículo</h2>
          <div className="mb-3">
            <input
              className="form-control"
              id="placa"
              placeholder="Placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              id="Id"
              placeholder="Documento"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="customSelect" className="form-label fw-semibold">
              Tipo de vehículo
            </label>
            <select
              id="customSelect"
              className="form-select shadow-sm"
              value={selectedOption}
              onChange={handleChange}
            >
              <option value="" disabled>
                Tipo vehículo
              </option>
              <option value="a">a</option>
              <option value="b">b</option>
              <option value="c">c</option>
            </select>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" onClick={handleRegister}>
              Registrar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
