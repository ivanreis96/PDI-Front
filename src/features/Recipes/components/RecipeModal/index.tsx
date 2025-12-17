import type { Receita } from '../../../shared/types/receita.types';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalHeader,
  ModalImageContainer,
  PlaceholderImage,
  ModalIcon,
  TitleSection,
  ModalTitle,
  ModalAuthor,
  SocialInfo,
  StatsContainer,
  StatItem,
  StatIcon,
  StatValue,
  StatLabel,
  ModalBody,
  Section,
  SectionTitle,
  IngredientsList,
  IngredientName,
  IngredientQuantity,
  Instructions,
} from './styles';

interface RecipeModalProps {
  receita: Receita;
  onClose: () => void;
}

export default function RecipeModal({ receita, onClose }: RecipeModalProps) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          ✕
        </CloseButton>

        <ModalHeader>
          <ModalImageContainer>
            <PlaceholderImage>
              <ModalIcon>🍽️</ModalIcon>
            </PlaceholderImage>
          </ModalImageContainer>
          
          <TitleSection>
            <ModalTitle>{receita.nome}</ModalTitle>
            <ModalAuthor>
              por <strong>@{receita.usuario.apelido}</strong>
            </ModalAuthor>
            
            {receita.usuario.instagram && (
              <SocialInfo>📷 {receita.usuario.instagram}</SocialInfo>
            )}
            {receita.usuario.tiktok && (
              <SocialInfo>🎵 {receita.usuario.tiktok}</SocialInfo>
            )}
          </TitleSection>
        </ModalHeader>

        {receita.publicacao && (
          <StatsContainer>
            <StatItem>
              <StatIcon>⭐</StatIcon>
              <div>
                <StatValue>{receita.publicacao.notaMedia.toFixed(1)}</StatValue>
                <StatLabel>{receita.publicacao.quantidadeVotos} votos</StatLabel>
              </div>
            </StatItem>
            <StatItem>
              <StatIcon>😋</StatIcon>
              <div>
                <StatValue>{receita.publicacao.deliciosos}</StatValue>
                <StatLabel>deliciosos</StatLabel>
              </div>
            </StatItem>
            <StatItem>
              <StatIcon>📅</StatIcon>
              <div>
                <StatValue>
                  {new Date(receita.publicacao.dataPublicacao).toLocaleDateString('pt-BR')}
                </StatValue>
                <StatLabel>publicado</StatLabel>
              </div>
            </StatItem>
          </StatsContainer>
        )}

        <ModalBody>
          <Section>
            <SectionTitle>📝 Ingredientes</SectionTitle>
            <IngredientsList>
              {receita.ingredientes.map((ing) => (
                <li key={ing.id}>
                  <IngredientName>{ing.nome}</IngredientName>
                  <IngredientQuantity>{ing.quantidade}</IngredientQuantity>
                </li>
              ))}
            </IngredientsList>
          </Section>

          <Section>
            <SectionTitle>👨‍🍳 Modo de Preparo</SectionTitle>
            <Instructions>
              {receita.modoPreparo}
            </Instructions>
          </Section>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}
