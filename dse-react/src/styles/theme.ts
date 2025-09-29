import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

// Global theme
export const theme = {
  colors: {
    glassPrimary: 'rgba(255, 255, 255, 0.25)',
    glassSecondary: 'rgba(255, 255, 255, 0.15)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',
    glassShadow: 'rgba(0, 0, 0, 0.15)',
    glassHighlight: 'rgba(255, 255, 255, 0.4)',
    accentBlue: '#007AFF',
    accentPurple: '#5856D6',
    accentGreen: '#4CAF50',
    white: '#FFFFFF',
    textPrimary: 'rgba(255, 255, 255, 0.9)',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    textDisabled: 'rgba(255, 255, 255, 0.4)',
  },
  gradients: {
    main: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    geography: 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)',
    economics: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)',
    blue: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
  },
  shadows: {
    glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
    hover: '0 20px 40px rgba(0, 0, 0, 0.15)',
    button: '0 4px 16px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    small: '12px',
    medium: '16px',
    large: '20px',
    xlarge: '24px',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
    hero: 'clamp(2.5rem, 5vw, 4rem)',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    xxxl: '4rem',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
};

// Animations
export const floatingParticles = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-20px) rotate(5deg); }
`;

export const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInRight = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

export const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

// Global Styles
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: ${theme.gradients.main};
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    animation: ${floatingParticles} 20s ease-in-out infinite alternate;
    pointer-events: none;
    z-index: 0;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  /* Font imports */
  @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@300;400;500;600;700;800&display=swap');
`;

// Common styled components
export const GlassContainer = styled.div<{ background?: string }>`
  background: ${props => props.background || theme.colors.glassPrimary};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${theme.colors.glassBorder};
  border-radius: ${theme.borderRadius.xlarge};
  position: relative;
  
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

export const Container = styled.div<{ maxWidth?: string }>`
  max-width: ${props => props.maxWidth || '1200px'};
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

// Responsive mixin
export const responsive = {
  mobile: (styles: any) => css`
    @media (max-width: ${theme.breakpoints.mobile}) {
      ${styles}
    }
  `,
  tablet: (styles: any) => css`
    @media (max-width: ${theme.breakpoints.tablet}) {
      ${styles}
    }
  `,
  desktop: (styles: any) => css`
    @media (min-width: ${theme.breakpoints.desktop}) {
      ${styles}
    }
  `,
};

export default theme;