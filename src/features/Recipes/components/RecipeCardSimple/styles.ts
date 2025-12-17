import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

export const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecipeIcon = styled.span`
  font-size: 64px;
  opacity: 0.8;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  font-weight: 600;
  line-height: 1.3;
`;

export const CardAuthor = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
  margin: 0;
`;

export const CardStats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-weight: 500;
`;

export const StatIcon = styled.span`
  font-size: 16px;
`;

export const CardTags = styled.div`
  margin-top: auto;
  padding-top: 12px;
`;

export const Tag = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.bgHover};
  color: ${({ theme }) => theme.colors.textTertiary};
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;
