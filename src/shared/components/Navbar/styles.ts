import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.bgSecondary};
  padding: 16px 24px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

export const NavbarMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.2s;
    display: inline-block;

    &:hover {
      background: ${({ theme }) => theme.colors.bgHover};
      color: ${({ theme }) => theme.colors.accentPrimary};
    }

    &:active {
      transform: scale(0.95);
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 14px;
      padding: 6px 12px;
    }
  }
`;
