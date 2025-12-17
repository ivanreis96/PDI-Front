import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 12px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.colors.bgHover};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  z-index: 10;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.borderHover};
    transform: rotate(90deg);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  gap: 24px;
  padding: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`;

export const ModalImageContainer = styled.div`
  flex-shrink: 0;
`;

export const PlaceholderImage = styled.div`
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
  }
`;

export const ModalIcon = styled.span`
  font-size: 80px;
  opacity: 0.5;

  @media (max-width: 768px) {
    font-size: 60px;
  }
`;

export const TitleSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalTitle = styled.h2`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ModalAuthor = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 16px;
  margin: 0;

  strong {
    color: ${({ theme }) => theme.colors.accentPrimary};
  }
`;

export const SocialInfo = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  margin: 0;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 24px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 768px) {
    padding: 20px;
    gap: 12px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 768px) {
    padding: 12px;
    gap: 8px;
  }
`;

export const StatIcon = styled.span`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const StatValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ModalBody = styled.div`
  padding: 32px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const Section = styled.section`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0 0 16px 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`;

export const IngredientName = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;

export const IngredientQuantity = styled.span`
  color: ${({ theme }) => theme.colors.accentPrimary};
  font-weight: 600;
`;

export const Instructions = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.8;
  white-space: pre-line;
`;
