import React from 'react';
import styled from 'styled-components';
import { theme, responsive } from '../styles/theme';
import Header from './Header';
import FloatingElements from './FloatingElements';

const LayoutContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.main<{ maxWidth?: string; padding?: string }>`
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  padding: ${props => props.padding || `${theme.spacing.xxxl} ${theme.spacing.xl}`};
  position: relative;
  z-index: 10;

  ${responsive.mobile(`
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  `)}
`;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  backLink?: string;
  maxWidth?: string;
  padding?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  backLink, 
  maxWidth, 
  padding 
}) => {
  return (
    <LayoutContainer>
      <FloatingElements />
      <Header title={title} backLink={backLink} />
      <MainContent maxWidth={maxWidth} padding={padding}>
        {children}
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;