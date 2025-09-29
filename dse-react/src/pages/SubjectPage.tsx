import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, DownloadButton } from '../components';
import { theme, responsive, GlassContainer } from '../styles/theme';
import { getSubjectData, getRandomEssay, categoryNames } from '../data';
import { SubjectData, Essay, Paper } from '../types';

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

const HeroTitle = styled.h1`
  font-size: ${theme.fontSizes.hero};
  font-weight: ${theme.fontWeights.extrabold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};

  ${responsive.mobile(`
    flex-direction: column;
    gap: ${theme.spacing.sm};
  `)}
`;

const HeroSubtitle = styled.p`
  font-size: ${theme.fontSizes.large};
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
  font-weight: ${theme.fontWeights.normal};
  line-height: 1.5;
`;

const TabsContainer = styled.div`
  position: sticky;
  top: 100px;
  z-index: 50;
  margin-bottom: ${theme.spacing.xl};
`;

const GlassTabs = styled(GlassContainer)`
  display: flex;
  padding: ${theme.spacing.sm};
  gap: ${theme.spacing.sm};
  box-shadow: ${theme.shadows.glass};

  ${responsive.mobile(`
    flex-direction: column;
    gap: ${theme.spacing.xs};
  `)}
`;

const TabButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  color: ${props => props.active ? theme.colors.white : theme.colors.textSecondary};
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.medium};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &:hover:not([disabled]) {
    background: ${props => props.active ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
    transform: ${props => props.active ? 'scale(1.02)' : 'translateY(-2px)'};
  }

  ${props => props.active && `
    box-shadow: ${theme.shadows.button};
    transform: scale(1.02);
  `}

  ${responsive.mobile(`
    padding: ${theme.spacing.sm} ${theme.spacing.md};
  `)}
`;

const ContentSection = styled(GlassContainer)`
  padding: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.glass};
  scroll-margin-top: 120px;

  ${responsive.mobile(`
    padding: ${theme.spacing.lg};
  `)}
`;

const SectionTitle = styled.h2`
  font-size: ${theme.fontSizes.xxlarge};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const TableContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  border: 1px solid ${theme.colors.glassBorder};
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
`;

const TableHeader = styled.thead`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
`;

const TableHeaderCell = styled.th`
  padding: ${theme.spacing.md};
  text-align: left;
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.small};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid ${theme.colors.glassBorder};
`;

const TableRow = styled.tr`
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.01);
  }
`;

const TableCell = styled.td<{ isYear?: boolean }>`
  padding: ${theme.spacing.md};
  color: ${props => props.isYear ? theme.colors.white : theme.colors.textPrimary};
  font-weight: ${props => props.isYear ? theme.fontWeights.bold : theme.fontWeights.medium};
`;

// Essay components
const SurpriseContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SurpriseButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.gradients.economics};
  border: none;
  border-radius: ${theme.borderRadius.medium};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.semibold};
  font-size: ${theme.fontSizes.large};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 24px rgba(255, 107, 107, 0.4);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const EssayCard = styled(GlassContainer)`
  padding: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
  animation: slideInUp 0.5s ease-out;
`;

const EssayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

const EssayMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.textSecondary};

  span {
    background: rgba(255, 255, 255, 0.1);
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.small};
    font-weight: ${theme.fontWeights.medium};
  }
`;

const CategoryBadge = styled.span<{ category: string }>`
  display: inline-block;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.large};
  font-size: 0.75rem;
  font-weight: ${theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${theme.colors.white};
  
  ${props => {
    switch (props.category) {
      case 'rock': return 'background: #FF6B6B;';
      case 'river_coastal': return 'background: #4ECDC4;';
      case 'plate_tectonics': return 'background: #45B7D1;';
      case 'industry': return 'background: #96CEB4;';
      case 'climate': return 'background: #FFEAA7; color: #2d3436;';
      case 'population': return 'background: #DDA0DD;';
      default: return 'background: #666;';
    }
  }}
`;

const EssayQuestion = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.small};
  border-left: 4px solid ${theme.colors.accentGreen};
  margin-bottom: ${theme.spacing.xl};

  h3 {
    color: ${theme.colors.white};
    font-weight: ${theme.fontWeights.semibold};
    font-size: ${theme.fontSizes.large};
    margin-bottom: ${theme.spacing.md};
  }

  p {
    color: ${theme.colors.textPrimary};
    font-size: ${theme.fontSizes.large};
    line-height: 1.6;
  }
`;

const EssayActions = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background: ${props => props.variant === 'primary' ? 
    `linear-gradient(135deg, ${theme.colors.accentGreen}, #45a049)` : 
    'rgba(255, 255, 255, 0.2)'
  };
  border: ${props => props.variant === 'primary' ? 'none' : `1px solid ${theme.colors.glassBorder}`};
  border-radius: ${theme.borderRadius.small};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;
  min-width: 200px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.variant === 'primary' ? 
      '0 4px 16px rgba(76, 175, 80, 0.3)' : 
      'none'
    };
    background: ${props => props.variant === 'primary' ? 
      `linear-gradient(135deg, ${theme.colors.accentGreen}, #45a049)` : 
      'rgba(255, 255, 255, 0.3)'
    };
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const SubjectPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [activeTab, setActiveTab] = useState('sample');
  const [currentEssay, setCurrentEssay] = useState<Essay | null>(null);
  const [subjectInfo, setSubjectInfo] = useState<SubjectData | null>(null);

  useEffect(() => {
    if (subjectId) {
      const data = getSubjectData(subjectId);
      setSubjectInfo(data);
      
      // Set default tab based on content availability
      if (data?.specialContent) {
        setActiveTab('special');
      } else {
        setActiveTab('sample');
      }
    }
  }, [subjectId]);

  const handleGetRandomEssay = () => {
    const essay = getRandomEssay();
    setCurrentEssay(essay);
    
    // Scroll to essay card after a short delay
    setTimeout(() => {
      const essayCard = document.getElementById('essay-card');
      if (essayCard) {
        essayCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleViewModelAnswer = () => {
    if (currentEssay && currentEssay.answerPath) {
      window.open(currentEssay.answerPath, '_blank');
    }
  };

  const renderPapersTable = (papers: Paper[], subjectType: string = '') => {
    if (papers.length === 0) {
      return (
        <div style={{ 
          textAlign: 'center', 
          padding: theme.spacing.xl, 
          color: theme.colors.textSecondary 
        }}>
          <p>No papers available yet. Coming soon!</p>
        </div>
      );
    }

    let headers = ['Year'];
    
    // Different headers based on subject
    if (subjectType === 'english') {
      headers = [...headers, 'Reading', 'Writing', 'Listening', 'Speaking', 'Answer', 'Performance'];
    } else if (subjectType === 'geography') {
      headers = [...headers, 'Paper 1', 'Paper 2', 'Map', 'Answer', 'Performance'];
    } else if (subjectType === 'chinese') {
      headers = [...headers, 'Paper 1', 'Paper 2', 'Listening', 'Speaking', 'Answer', 'Performance'];
    } else {
      // Default for economics and others
      headers = [...headers, 'Paper 1', 'Paper 2', 'Data Response', 'Answer', 'Performance'];
    }

    return (
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              {headers.map(header => (
                <TableHeaderCell key={header}>{header}</TableHeaderCell>
              ))}
            </tr>
          </TableHeader>
          <tbody>
            {papers.map((paper, index) => (
              <TableRow key={index}>
                <TableCell isYear>{paper.year}</TableCell>
                <TableCell>
                  <DownloadButton href={paper.paper1} />
                </TableCell>
                <TableCell>
                  <DownloadButton href={paper.paper2} />
                </TableCell>
                {subjectType === 'geography' && (
                  <TableCell>
                    <DownloadButton href={paper.map} />
                  </TableCell>
                )}
                {(subjectType === 'english' || subjectType === 'chinese') && (
                  <>
                    <TableCell>
                      <DownloadButton href={paper.dataResponse} />
                    </TableCell>
                    <TableCell>
                      <DownloadButton href={paper.map} />
                    </TableCell>
                  </>
                )}
                {subjectType === 'economics' && (
                  <TableCell>
                    <DownloadButton href={paper.dataResponse} />
                  </TableCell>
                )}
                <TableCell>
                  <DownloadButton href={paper.answer || paper.answers} />
                </TableCell>
                <TableCell>
                  <DownloadButton href={paper.performance} />
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    );
  };

  if (!subjectInfo) {
    return (
      <Layout title="Subject Not Found" backLink="/">
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h1>Subject not found</h1>
          <p>The requested subject could not be found.</p>
        </div>
      </Layout>
    );
  }

  const isGeography = subjectId === 'geography';
  const hasSpecialContent = subjectInfo?.specialContent;
  const tabs = [];
  
  if (hasSpecialContent) {
    tabs.push('special');
  } else {
    tabs.push('sample', 'practice', 'past');
  }
  
  if (isGeography && !hasSpecialContent) {
    tabs.push('surprise');
  }

  return (
    <Layout title={subjectInfo.name} backLink="/">
      <HeroSection>
        <HeroTitle>
          <span>{subjectInfo.icon}</span>
          <span>{subjectInfo.name}</span>
        </HeroTitle>
        <HeroSubtitle>
          Access comprehensive {subjectInfo.name.toLowerCase()} past papers, practice materials, and sample papers with our modern interface.
        </HeroSubtitle>
      </HeroSection>

      <TabsContainer>
        <GlassTabs>
          {tabs.map(tab => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'special' ? '🎓 Interactive Learning' :
               tab === 'surprise' ? '🎲 Surprise Me' : 
               tab === 'past' ? '2012-2023' : 
               `${tab.charAt(0).toUpperCase() + tab.slice(1)} Paper`}
            </TabButton>
          ))}
        </GlassTabs>
      </TabsContainer>

      {activeTab === 'special' && subjectInfo?.specialContent && (
        <ContentSection>
          <SectionTitle>{subjectInfo.specialContent.title}</SectionTitle>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.1)',
            padding: theme.spacing.lg,
            borderRadius: theme.borderRadius.small,
            marginBottom: theme.spacing.xl
          }}>
            <p style={{ 
              color: theme.colors.textSecondary,
              fontSize: theme.fontSizes.large,
              marginBottom: theme.spacing.lg,
              lineHeight: 1.6
            }}>
              {subjectInfo.specialContent.description}
            </p>
            
            <div style={{
              display: 'flex',
              gap: theme.spacing.md,
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => window.open(subjectInfo.specialContent!.url, '_blank')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: theme.spacing.sm,
                  padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
                  background: `linear-gradient(135deg, ${theme.colors.accentGreen}, #45a049)`,
                  border: 'none',
                  borderRadius: theme.borderRadius.small,
                  color: theme.colors.white,
                  fontWeight: theme.fontWeights.semibold,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: theme.fontSizes.medium
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(76, 175, 80, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <svg fill="currentColor" viewBox="0 0 20 20" style={{ width: '16px', height: '16px' }}>
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-1a1 1 0 10-2 0v1H5V7h1a1 1 0 000-2H5z"/>
                </svg>
                開始學習 (Open Learning Site)
              </button>
            </div>
          </div>
        </ContentSection>
      )}

      {activeTab === 'sample' && (
        <ContentSection>
          <SectionTitle>Sample Paper</SectionTitle>
          {renderPapersTable(subjectInfo.papers.sample, subjectId || '')}
        </ContentSection>
      )}

      {activeTab === 'practice' && (
        <ContentSection>
          <SectionTitle>Practice Paper</SectionTitle>
          {renderPapersTable(subjectInfo.papers.practice, subjectId || '')}
        </ContentSection>
      )}

      {activeTab === 'past' && (
        <ContentSection>
          <SectionTitle>Past Papers (2012-2023)</SectionTitle>
          {renderPapersTable(subjectInfo.papers.pastPapers, subjectId || '')}
        </ContentSection>
      )}

      {activeTab === 'surprise' && isGeography && (
        <ContentSection>
          <SectionTitle>🎲 Random Essay Challenge</SectionTitle>
          <SurpriseContainer>
            <div style={{ textAlign: 'center', marginBottom: theme.spacing.xl }}>
              <p style={{ 
                color: theme.colors.textSecondary, 
                fontSize: theme.fontSizes.large, 
                marginBottom: theme.spacing.xl,
                lineHeight: 1.6 
              }}>
                Get a random geography essay question to test your knowledge! Perfect for exam preparation and revision.
              </p>
              <SurpriseButton onClick={handleGetRandomEssay}>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                Get Random Essay Question
              </SurpriseButton>
            </div>

            {currentEssay && (
              <EssayCard id="essay-card">
                <EssayHeader>
                  <EssayMeta>
                    <span>{currentEssay.year}</span>
                    <span>{currentEssay.paper}</span>
                    <span>Question {currentEssay.questionNumber}</span>
                    <span>{currentEssay.marks} marks</span>
                  </EssayMeta>
                  <CategoryBadge category={currentEssay.category}>
                    {categoryNames[currentEssay.category as keyof typeof categoryNames]}
                  </CategoryBadge>
                </EssayHeader>
                
                <EssayQuestion>
                  <h3>Essay Question:</h3>
                  <p>{currentEssay.question}</p>
                </EssayQuestion>
                
                <EssayActions>
                  <ActionButton variant="primary" onClick={handleViewModelAnswer}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 112 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H6a1 1 0 110-2h1V9z"/>
                    </svg>
                    View Model Answer
                  </ActionButton>
                  <ActionButton variant="secondary" onClick={handleGetRandomEssay}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"/>
                    </svg>
                    Try Another Question
                  </ActionButton>
                </EssayActions>
              </EssayCard>
            )}
          </SurpriseContainer>
        </ContentSection>
      )}
    </Layout>
  );
};

export default SubjectPage;