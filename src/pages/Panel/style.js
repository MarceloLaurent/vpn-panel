import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: calc(100vh - 60px);
`;

export const Sidebar = styled.aside`
  width: 220px;
  background-color: #20232a;
  color: white;
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 10px 0;
    cursor: pointer;
    border-bottom: 1px solid #333;
    transition: background 0.2s;

    &:hover {
      background-color: #333;
    }
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 30px;
  background-color: #f7f7f7;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-top: 20px;

    th, td {
      padding: 12px 16px;
      border-bottom: 1px solid #ccc;
      text-align: left;
    }

    th {
      background-color: #f0f0f0;
    }

    tr:hover {
      background-color: #f9f9f9;
    }
  }
`;
