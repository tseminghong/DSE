import React from 'react';
import styled from 'styled-components';
import { theme, responsive } from '../styles/theme';
import { HeaderProps } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: ${theme.colors.glassPrimary};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid ${theme.colors.glassBorder};
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  z-index: 100;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${theme.colors.glassHighlight}, transparent);
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: ${theme.fontSizes.xlarge};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid ${theme.colors.glassBorder};
  border-radius: ${theme.borderRadius.medium};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: ${theme.spacing.xl};

  ${responsive.mobile(`
    display: none;
  `)}
`;

const NavLink = styled.a`
  color: ${theme.colors.textPrimary};
  text-decoration: none;
  font-weight: ${theme.fontWeights.medium};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.small};

  &:hover {
    color: ${theme.colors.white};
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

const Header: React.FC<HeaderProps> = ({ title, backLink }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    if (backLink) {
      navigate(backLink);
    } else {
      navigate(-1);
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <HeaderContainer>
      <HeaderContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: theme.spacing.md }}>
          {!isHomePage && (
            <BackButton onClick={handleBackClick}>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back
            </BackButton>
          )}
          <Logo onClick={handleLogoClick}>
            <span>📚</span>
            <span>{title || 'Past Paper Archive'}</span>
          </Logo>
        </div>
        
        <NavLinks>
          <NavLink href="https://hpccss.site">Home</NavLink>
          <NavLink href="https://hpccss.site">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;