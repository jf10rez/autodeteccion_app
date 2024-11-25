import React from "react";
import { useSelector } from "react-redux";
import { pricesByType } from "../store/uiSlice";
import { useNavigate } from "react-router-dom";

export const TableReport = () => {
  const { vehicles } = useSelector((state) => state.ui);
  const navigate = useNavigate();
  const handleRegresar = () => {
    navigate("/consult");
  };
  return (
    <section id="reportes">
      <div className="container-flud vh-100">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-8">
            <h3 className="mb-4 text-white">Reporte</h3>
            <table className="table table-striped table-hover shadow-sm">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Placa</th>
                  <th scope="col">Identificación</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Tarifa aplicada</th>
                </tr>
              </thead>
              <tbody>
                {vehicles?.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">${item.placa}</th>
                    <td>{item.id}</td>
                    <td>{item.type}</td>
                    <td>${pricesByType[item.type]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <button className="btn btn-light mt-5" onClick={handleRegresar}>
                {" "}
                Regresar{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
