import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Sidebar, Content } from './style';
import api from "../../services/api";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [view, setView] = useState("");
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("usuario");

    if (!userData) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(userData);

    if (!user.administrador) {
      navigate("/panel");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  const carregarFuncionarios = async () => {
    try {
      const response = await api.get("/funcionarios");
      setFuncionarios(response.data);
      setView("funcionarios");
    } catch (err) {
      console.error("Erro ao carregar funcionários:", err);
    }
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Container>
        <Sidebar>
          <ul>
            <li><button onClick={carregarFuncionarios}>Funcionários</button></li>
            <li><button onClick={() => setView("certificados")}>Certificados</button></li>
            <li><button onClick={() => setView("administradores")}>Gerenciar Administradores</button></li>
          </ul>
        </Sidebar>
        <Content>
          {view === "funcionarios" && (
            <>
              <h2>Funcionários</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Username</th>
                    <th>Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {funcionarios.map((f) => (
                    <tr key={f.id}>
                      <td>{f.id}</td>
                      <td>{f.nome}</td>
                      <td>{f.username}</td>
                      <td>{f.administrador ? "Sim" : "Não"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {view === "certificados" && (
            <>
              <h2>Certificados</h2>
              <p>Em breve: gerenciamento de certificados.</p>
            </>
          )}

          {view === "administradores" && (
            <>
              <h2>Gerenciar Administradores</h2>
              <p>Em breve: promover e revogar acessos.</p>
            </>
          )}

          {!view && (
            <>
              <h2>Bem-vindo, Administrador</h2>
              <p>Escolha uma opção no menu à esquerda.</p>
            </>
          )}
        </Content>
      </Container>
    </>
  );
}
