// Pode estar no mesmo arquivo Login.jsx ou em um arquivo separado ex: Login.styles.js

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f6fa;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-weight: 500;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: -8px;
  margin-bottom: 10px;
`;

export const ResetLink = styled.p`
  color: #007bff;
  text-align: center;
  margin-top: 14px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    text-decoration: underline;
  }
`;
