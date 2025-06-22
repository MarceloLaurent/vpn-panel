import React, { useState } from "react";
import axios from "axios";

export default function GenerateCertificate({ funcionarioId, username }) {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const identificador = `vpn-${username}`;
      const response = await axios.post(
        `http://localhost:8080/certificados/gerar/${funcionarioId}`,
        { identificador },
        {
          responseType: "blob", // importante para receber o arquivo binário
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${identificador}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

      alert("Certificado gerado e download iniciado!");
    } catch (error) {
      console.error("Erro ao gerar certificado:", error);
      alert("Erro ao gerar certificado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleGenerate} disabled={loading}>
      {loading ? "Gerando..." : "Gerar Certificado"}
    </button>
  );
}
