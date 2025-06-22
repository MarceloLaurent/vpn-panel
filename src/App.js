import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";
import Panel from "./pages/Panel";
import AdminPanel from "./pages/AdminPanel";

const App = () => {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
    setCarregando(false);
  }, []);

  if (carregando) {
    return <div>Carregando...</div>; // Evita renderizar rotas antes de saber se há usuário
  }

  const rotaProtegida = (componente) => {
    return usuario ? componente : <Navigate to="/login" />;
  };

  const rotaAdmin = (componente) => {
    if (!usuario) return <Navigate to="/login" />;
    if (!usuario.administrador) return <Navigate to="/panel" />;
    return componente;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setUsuario={setUsuario} />} />
        <Route path="/admin" element={rotaAdmin(<AdminPanel />)} />
        <Route path="/panel" element={rotaProtegida(<Panel />)} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
