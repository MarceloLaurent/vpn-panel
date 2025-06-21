import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: #2c3e50;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function Header({ onLogout }) {
  return (
    <HeaderWrapper>
      <div>Painel VPN</div>
      <button onClick={onLogout}>Sair</button>
    </HeaderWrapper>
  );
}
