import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { Consult } from "./components/Consult";
import { TableReport } from "./components/TableReport";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Login />} />
        {/* Ruta para el Home */}
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
        {/* Ruta para About */}
        <Route
          path="/consult"
          element={
            <ProtectedRoute>
              <Consult />
            </ProtectedRoute>
          }
        />
        <Route
          path="/report"
          element={
            <ProtectedRoute>
              <TableReport />
            </ProtectedRoute>
          }
        />
        {/* Ruta para no encontradas */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
