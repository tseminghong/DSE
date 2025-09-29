import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Layout, GlassCard } from '../components';
import { theme, responsive, slideInUp } from '../styles/theme';
import { subjects } from '../data';

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxxl};
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fontSizes.hero};
  font-weight: ${theme.fontWeights.extrabold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.1;
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  font-weight: ${theme.fontWeights.normal};
  line-height: 1.5;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xxl};

  ${responsive.mobile(`
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  `)}
`;

const AnimatedCard = styled(GlassCard)<{ animationDelay: number }>`
  opacity: 0;
  transform: translateY(30px);
  animation: ${slideInUp} 0.6s ease forwards;
  animation-delay: ${props => props.animationDelay * 0.1}s;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setAnimateCards(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (subject: any) => {
    if (subject.active) {
      navigate(subject.href);
    }
  };

  return (
    <Layout>
      <HeroSection>
        <HeroTitle>Choose Your Subject</HeroTitle>
        <HeroSubtitle>
          Access comprehensive past papers with our modern, intuitive interface. 
          More subjects are being added regularly.
        </HeroSubtitle>
      </HeroSection>

      <CardsGrid>
        {subjects.map((subject, index) => (
          <AnimatedCard
            key={subject.id}
            icon={subject.icon}
            title={subject.name}
            subtitle={subject.active ? 'View Papers' : 'Coming Soon'}
            disabled={!subject.active}
            onClick={() => handleCardClick(subject)}
            animationDelay={animateCards ? index : 0}
          />
        ))}
      </CardsGrid>
    </Layout>
  );
};

export default HomePage;