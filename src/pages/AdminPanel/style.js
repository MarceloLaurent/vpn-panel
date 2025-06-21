import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.aside`
  width: 220px;
  background-color: #2c3e50;
  padding: 20px;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 15px;
  }
  button {
    width: 100%;
    padding: 10px 15px;
    background: none;
    border: none;
    color: #ecf0f1;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #34495e;
    }
    &:focus {
      outline: none;
      background-color: #2980b9;
    }
  }
`;

export const Content = styled.main`
  flex-grow: 1;
  padding: 30px;
  background-color: #ecf0f1;
  overflow-y: auto;

  h2 {
    margin-bottom: 20px;
    color: #34495e;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;
    font-family: Arial, sans-serif;
  }

  thead tr {
    background-color: #2980b9;
    color: white;
    text-align: left;
  }

  thead th {
    padding: 12px 15px;
  }

  tbody tr {
    background-color: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: background-color 0.2s ease;
  }

  tbody tr:hover {
    background-color: #d6eaf8;
  }

  tbody td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
  }
`;
