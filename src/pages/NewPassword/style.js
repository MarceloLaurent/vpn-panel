import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #eef2f5;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 36px;
  max-width: 420px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 22px;
  color: #333;
  margin-bottom: 4px;
  text-align: center;
`;

export const Sub = styled.p`
  font-size: 14px;
  text-align: center;
  color: #666;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-top: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 12px;
  background: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 4px;
`;

export const Rules = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  font-size: 13px;
  color: #444;
`;

export const Success = styled.p`
  color: green;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
`;

export const Erro = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
`;
