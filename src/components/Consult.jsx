import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyVehicle, pricesByType } from "../store/uiSlice";
import { toast } from "react-toastify";


export const Consult = () => {
  const dispatch = useDispatch();
  const { priceDisccount, vehicleExist } = useSelector((state) => state.ui);
  const navigate = useNavigate();
  const [placa, setPlaca] = useState("");
  const [id, setId] = useState("");

  const handleConsult = () => {
    if (!placa || !id) {
      return toast.error("Debe ingresar todos los datos");
    }
    dispatch(
      verifyVehicle({
        placa,
        id,
      })
    );
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleReport = () => navigate("/report");

  return (
    <section id="consultSection">
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow p-4" style={{ width: "27rem" }}>
          <h2 className="text-center mb-4">Verificación de vehículo</h2>
          <div className="mb-3 pt-3">
            <label className="form-label">Placa del vehiculo</label>
            <input
              className="form-control"
              id="placa"
              placeholder="Placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 pt-3">
            <label className="form-label">Documento de identificacion</label>
            <input
              className="form-control"
              id="Id"
              placeholder="Documento"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-center pt-3">
            <button className="btn btn-success m-2" onClick={handleConsult}>
              Verificar
            </button>
            <button className="btn btn-danger m-2" onClick={handleReport}>
              Reporte
            </button>
            {vehicleExist === false && (
              <>
                <button
                  className="btn btn-primary m-2"
                  onClick={handleRegister}
                >
                  Registrar
                </button>
              </>
            )}
          </div>
        </div>
        {priceDisccount && (
          <div
            className="card shadow p-4"
            style={{ width: "27rem", marginLeft: "5rem" }}
          >
            <span>{`El precio preferencial es: $${priceDisccount}`}</span>
          </div>
        )}
        {vehicleExist === false && (
          <div
            className="card shadow p-4"
            style={{ width: "27rem", marginLeft: "5rem" }}
          >
            <span>{`El precio base es de: $${pricesByType.d}`}</span>
          </div>
        )}
      </div>
    </section>
  );
};
