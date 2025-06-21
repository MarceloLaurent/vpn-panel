import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eef2f5;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 36px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 13px;
  margin-top: -8px;
  margin-bottom: 8px;
`;

export const Info = styled.p`
  margin-top: 12px;
  color: #2e7d32;
  font-size: 14px;
  text-align: center;
`;
