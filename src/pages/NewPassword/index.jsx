import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "../services/api";
import { Container, FormWrapper, Title, Sub, Form, Label, Input, Error, Erro, Button, Rules, Success } from "./style";

const schema = yup.object().shape({
  novaSenha: yup
    .string()
    .required("Informe a nova senha")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .matches(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter ao menos um número")
    .matches(/[!@#$%&*\-_=+]/, "A senha deve conter ao menos um caractere especial"),
  confirmarSenha: yup
    .string()
    .required("Confirme a nova senha")
    .oneOf([yup.ref("novaSenha")], "A senha informada não corresponde com a confirmação de senha"),
});

export default function NewPassword() {
  const { token } = useParams(); // token recebido pelo link
  const navigate = useNavigate();
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setMensagem("");
    setErro("");

    try {
      await axios.post(`/nova-senha/${token}`, {
        senha: data.novaSenha,
      });
      setMensagem("Sucesso, agora você pode realizar a autenticação.");
      setTimeout(() => navigate("/login"), 2500);
    } catch (err) {
      if (err.response?.data?.mensagem === "Senha igual à anterior") {
        setErro("A nova senha não pode ser igual a senha anterior.");
      } else {
        setErro("Erro ao redefinir senha. O link pode estar expirado.");
      }
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Definir Nova Senha</Title>
        <Sub>Informe a nova senha de acesso</Sub>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nova Senha</Label>
          <Input type="password" {...register("novaSenha")} />
          <Error>{errors.novaSenha?.message}</Error>

          <Label>Confirmar Nova Senha</Label>
          <Input type="password" {...register("confirmarSenha")} />
          <Error>{errors.confirmarSenha?.message}</Error>

          <Rules>
            <li>No mínimo 8 caracteres</li>
            <li>Ao menos 1 letra maiúscula (A-Z)</li>
            <li>Ao menos 1 número (0-9)</li>
            <li>Ao menos 1 caractere especial (!@#$%&*-_+=)</li>
          </Rules>

          <Button type="submit">Redefinir Senha</Button>

          {mensagem && <Success >{mensagem}</Success>}
          {erro && <Erro>{erro}</Erro>}
        </Form>
      </FormWrapper>
    </Container>
  );
}
