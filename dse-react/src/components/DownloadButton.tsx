import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { DownloadButtonProps } from '../types';

const Button = styled.a<{ unavailable?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background: ${props => props.unavailable ? 
    'rgba(255, 255, 255, 0.05)' : 
    'rgba(255, 255, 255, 0.2)'
  };
  border: 1px solid ${props => props.unavailable ? 
    'rgba(255, 255, 255, 0.2)' : 
    'rgba(255, 255, 255, 0.3)'
  };
  border-radius: ${theme.borderRadius.small};
  color: ${props => props.unavailable ? 
    theme.colors.textDisabled : 
    theme.colors.white
  };
  text-decoration: none;
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.small};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: ${props => props.unavailable ? 'not-allowed' : 'pointer'};
  font-style: ${props => props.unavailable ? 'italic' : 'normal'};

  ${props => props.unavailable && `
    border-style: dashed;
  `}

  &:hover {
    ${props => !props.unavailable && `
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.button};
      border-color: rgba(255, 255, 255, 0.4);
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: ${props => props.unavailable ? '-100%' : '100%'};
  }

  svg {
    width: 16px;
    height: 16px;
    opacity: 0.8;
  }
`;

const DownloadIcon: React.FC = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"/>
  </svg>
);

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  href, 
  label = 'Download', 
  unavailable = false 
}) => {
  if (unavailable || !href) {
    return (
      <Button unavailable>
        <span>Unavailable</span>
      </Button>
    );
  }

  return (
    <Button href={href} target="_blank" rel="noopener noreferrer">
      <DownloadIcon />
      <span>{label}</span>
    </Button>
  );
};

export default DownloadButton;