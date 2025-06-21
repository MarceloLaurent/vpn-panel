import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Panel from "./pages/Panel";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  const rotaProtegida = (elemento, somenteAdmin = false) => {
    if (!usuario) return <Navigate to="/login" />;

    if (somenteAdmin && !usuario.administrador) {
      return <Navigate to="/panel" />;
    }

    return elemento;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUsuario={setUsuario} />} />
        <Route path="/admin" element={rotaProtegida(<AdminPanel />, true)} />
        <Route path="/panel" element={rotaProtegida(<Panel />)} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
