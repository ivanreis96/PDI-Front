import type { Receita } from '../../../shared/types/receita.types';
import {
  Card,
  CardImage,
  PlaceholderImage,
  RecipeIcon,
  CardContent,
  CardTitle,
  CardAuthor,
  CardStats,
  StatItem,
  StatIcon,
  CardTags,
  Tag,
} from './styles';

interface RecipeCardSimpleProps {
  receita: Receita;
  onClick: () => void;
}

export default function RecipeCardSimple({ receita, onClick }: RecipeCardSimpleProps) {
  return (
    <Card onClick={onClick}>
      <CardImage>
        <PlaceholderImage>
          <RecipeIcon>🍽️</RecipeIcon>
        </PlaceholderImage>
      </CardImage>

      <CardContent>
        <CardTitle>{receita.nome}</CardTitle>
        <CardAuthor>por @{receita.usuario.apelido}</CardAuthor>

        {receita.publicacao && (
          <CardStats>
            <StatItem>
              <StatIcon>⭐</StatIcon>
              {receita.publicacao.notaMedia.toFixed(1)}
            </StatItem>
            <StatItem>
              <StatIcon>🗳️</StatIcon>
              {receita.publicacao.quantidadeVotos}
            </StatItem>
            <StatItem>
              <StatIcon>😋</StatIcon>
              {receita.publicacao.deliciosos}
            </StatItem>
          </CardStats>
        )}

        <CardTags>
          <Tag>{receita.ingredientes.length} ingredientes</Tag>
        </CardTags>
      </CardContent>
    </Card>
  );
}
