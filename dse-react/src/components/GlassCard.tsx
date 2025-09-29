import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CardContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  background: ${theme.colors.glassPrimary};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid ${theme.colors.glassBorder};
  border-radius: ${theme.borderRadius.xlarge};
  padding: ${theme.spacing.xl};
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  overflow: hidden;
  opacity: ${props => props.disabled ? 0.6 : 1};
  filter: ${props => props.disabled ? 'grayscale(50%)' : 'none'};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${theme.colors.glassHighlight}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-8px) scale(1.02)'};
    background: ${props => props.disabled ? theme.colors.glassPrimary : 'rgba(255, 255, 255, 0.3)'};
    border-color: ${props => props.disabled ? theme.colors.glassBorder : 'rgba(255, 255, 255, 0.4)'};
    box-shadow: ${props => props.disabled ? 'none' : `
      ${theme.shadows.hover},
      0 0 0 1px rgba(255, 255, 255, 0.1) inset
    `};

    &::before {
      opacity: ${props => props.disabled ? 0 : 1};
    }
  }
`;

const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${theme.spacing.lg};
  background: rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.large};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.xxlarge};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const CardTitle = styled.h3`
  font-size: ${theme.fontSizes.large};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.sm};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const CardSubtitle = styled.p`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.medium};
`;

const ComingSoonBadge = styled.div`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: ${theme.gradients.economics};
  color: ${theme.colors.white};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.small};
  font-size: 0.75rem;
  font-weight: ${theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
`;

const ComingSoonOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: ${theme.borderRadius.xlarge};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.large};
`;

const StyledGlassCard = styled(CardContainer)`
  ${CardIcon} {
    ${CardContainer}:hover & {
      background: rgba(255, 255, 255, 0.3);
      transform: ${props => props.disabled ? 'none' : 'scale(1.1)'};
      box-shadow: ${props => props.disabled ? 'none' : '0 8px 16px rgba(0, 0, 0, 0.1)'};
    }
  }

  ${ComingSoonOverlay} {
    ${CardContainer}:hover & {
      opacity: ${props => props.disabled ? 1 : 0};
    }
  }
`;

interface GlassCardContentProps {
  icon: string;
  title: string;
  subtitle: string;
  disabled?: boolean;
}

const GlassCard: React.FC<GlassCardContentProps & { onClick?: () => void; className?: string }> = ({
  icon,
  title,
  subtitle,
  disabled = false,
  onClick,
  className
}) => {
  return (
    <StyledGlassCard
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      className={className}
    >
      <CardIcon>
        <span>{icon}</span>
      </CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{disabled ? 'Coming Soon' : subtitle}</CardSubtitle>
      
      {disabled && (
        <>
          <ComingSoonBadge>Soon</ComingSoonBadge>
          <ComingSoonOverlay>
            <span>Coming Soon</span>
          </ComingSoonOverlay>
        </>
      )}
    </StyledGlassCard>
  );
};

export default GlassCard;