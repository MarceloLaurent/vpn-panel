import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import axios from "../services/api";
import { Container, FormWrapper, Input, Title, Form, Label, Button, Error, Info } from "./style";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Informe o username para realizar o processo de entrada")
    .min(3, "O username deve ter no mínimo 3 caracteres")
    .max(30, "O username deve ter no máximo 30 caracteres"),
});

export default function PasswordReset() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [mensagem, setMensagem] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post("/recuperar-senha", data);
    } catch (err) {
      // Intencionalmente ignoramos erros para manter a resposta genérica
    }
    setMensagem("Um e-mail com um link foi enviado para sua caixa de entrada.");
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Recuperar Senha</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Username</Label>
          <Input type="text" {...register("username")} autoComplete="username" />
          <Error>{errors.username?.message}</Error>

          <Button type="submit">Solicitar Link</Button>

          {mensagem && <Info>{mensagem}</Info>}
        </Form>
      </FormWrapper>
    </Container>
  );
}
