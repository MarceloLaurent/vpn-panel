import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { Container, Sidebar, Content } from './style';

export default function Panel() {
  const navigate = useNavigate();
  const [certificados, setCertificados] = useState([]);
  const [mensagem, setMensagem] = useState("Escolha uma opção no menu à esquerda.");

  useEffect(() => {
    const userData = localStorage.getItem("usuario");

    if (!userData) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/login");
  };

  const handleListarCertificados = async () => {
    setMensagem("Carregando certificados...");
    const userData = JSON.parse(localStorage.getItem("usuario"));

    try {
      const response = await api.get(`/certificados?funcionarioId=${userData.id}`);
      setCertificados(response.data);
      setMensagem(null);
    } catch (err) {
      setMensagem("Erro ao carregar certificados.");
      console.error(err);
    }
  };

  return (
    <>
      <Header onLogout={handleLogout} />
      <Container>
        <Sidebar>
          <ul>
            <li onClick={handleListarCertificados}>Certificados</li>
          </ul>
        </Sidebar>
        <Content>
          <h2>Bem-vindo ao seu Painel</h2>
          {mensagem && <p>{mensagem}</p>}
          {certificados.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Data de Emissão</th>
                  <th>Validade</th>
                </tr>
              </thead>
              <tbody>
                {certificados.map((cert) => (
                  <tr key={cert.id}>
                    <td>{cert.id}</td>
                    <td>{cert.nome}</td>
                    <td>{cert.dataEmissao}</td>
                    <td>{cert.dataValidade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Content>
      </Container>
    </>
  );
}
