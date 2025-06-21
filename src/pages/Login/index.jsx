import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import {
  Container,
  FormWrapper,
  Title,
  Form,
  Label,
  Input,
  Error,
  ResetLink,
  Button,
} from "./style";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Informe o username para realizar o processo de entrada")
    .min(3, "O username deve ter no mínimo 3 caracteres")
    .max(30, "O username deve ter no máximo 30 caracteres"),
  senha: yup
    .string()
    .required("Informe a senha do usuário para realizar o processo de entrada"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const onSubmit = async ({ username, senha }) => {
    try {
      const response = await api.post("/login", { username, senha });

      const funcionario = response.data;

      localStorage.setItem("usuario", JSON.stringify(funcionario));
      console.log(funcionario);

      if (funcionario.administrador) {
        console.log("É ADM");
        navigate("/admin");
      } else {
        console.log("Não é ADM");
        navigate("/panel");
      }
    } catch (err) {
      if (err.response?.status === 403) {
        setMensagem("Funcionário inativo. Contate o administrador da rede.");
      } else {
        setMensagem("Usuário ou senha incorretos.");
      }
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Painel VPN</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Username</Label>
          <Input type="text" {...register("username")} autoComplete="username" />
          <Error>{errors.username?.message}</Error>

          <Label>Senha</Label>
          <Input type="password" {...register("senha")} autoComplete="current-password" />
          <Error>{errors.senha?.message}</Error>

          {mensagem && <Error>{mensagem}</Error>}

          <Button type="submit">Entrar</Button>

          <ResetLink onClick={() => navigate("/reset")}>
            Redefinir Senha
          </ResetLink>
        </Form>
      </FormWrapper>
    </Container>
  );
}
