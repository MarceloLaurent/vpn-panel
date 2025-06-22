import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Sidebar, Content } from "./style";
import GenerateCertificate from "../../components/GenerateCertificate";
import api from "../../services/api";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [funcionarios, setFuncionarios] = useState([]);
  const [sidebarSelected, setSidebarSelected] = useState("funcionarios");

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

  useEffect(() => {
    if (sidebarSelected === "funcionarios") {
      async function fetchFuncionarios() {
        try {
          const response = await api.get("/funcionarios");
          setFuncionarios(response.data);
        } catch (error) {
          console.error("Erro ao carregar funcionários:", error);
        }
      }
      fetchFuncionarios();
    }
  }, [sidebarSelected]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Container>
        <Sidebar>
          <ul>
            <li
              style={{ cursor: "pointer", fontWeight: sidebarSelected === "funcionarios" ? "bold" : "normal" }}
              onClick={() => setSidebarSelected("funcionarios")}
            >
              Funcionários
            </li>
            <li
              style={{ cursor: "pointer", fontWeight: sidebarSelected === "certificados" ? "bold" : "normal" }}
              onClick={() => setSidebarSelected("certificados")}
            >
              Certificados
            </li>
            <li
              style={{ cursor: "pointer", fontWeight: sidebarSelected === "administradores" ? "bold" : "normal" }}
              onClick={() => setSidebarSelected("administradores")}
            >
              Gerenciar Administradores
            </li>
          </ul>
        </Sidebar>
        <Content>
          {sidebarSelected === "funcionarios" && (
            <>
              <h2>Funcionários</h2>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Username</th>
                    <th>Administrador</th>
                    <th>Ativo</th>
                    <th>Gerar Certificado</th>
                  </tr>
                </thead>
                <tbody>
                  {funcionarios.map((funcionario) => (
                    <tr key={funcionario.id}>
                      <td>{funcionario.nome}</td>
                      <td>{funcionario.username}</td>
                      <td>{funcionario.administrador ? "Sim" : "Não"}</td>
                      <td>{funcionario.ativo ? "Sim" : "Não"}</td>
                      <td>
                        <GenerateCertificate
                          funcionarioId={funcionario.id}
                          username={funcionario.username}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {sidebarSelected === "certificados" && (
            <>
              <h2>Certificados</h2>
              <p>Aqui poderá listar os certificados (implemente depois).</p>
            </>
          )}

          {sidebarSelected === "administradores" && (
            <>
              <h2>Gerenciar Administradores</h2>
              <p>Aqui poderá gerenciar os administradores (implemente depois).</p>
            </>
          )}
        </Content>
      </Container>
    </>
  );
}
