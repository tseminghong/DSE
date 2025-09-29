import React from 'react';
import styled from 'styled-components';
import { responsive } from '../styles/theme';

const FloatingElement = styled.div<{ size: number; position: { top?: string; bottom?: string; left?: string; right?: string }; delay: number }>`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  pointer-events: none;
  animation: float 6s ease-in-out infinite;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.position.top};
  bottom: ${props => props.position.bottom};
  left: ${props => props.position.left};
  right: ${props => props.position.right};
  animation-delay: ${props => props.delay}s;

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  ${responsive.mobile(`
    display: none;
  `)}
`;

const FloatingElements: React.FC = () => {
  return (
    <>
      <FloatingElement 
        size={60} 
        position={{ top: '20%', left: '10%' }} 
        delay={0}
      />
      <FloatingElement 
        size={80} 
        position={{ top: '60%', right: '10%' }} 
        delay={2}
      />
      <FloatingElement 
        size={40} 
        position={{ bottom: '20%', left: '20%' }} 
        delay={4}
      />
    </>
  );
};

export default FloatingElements;