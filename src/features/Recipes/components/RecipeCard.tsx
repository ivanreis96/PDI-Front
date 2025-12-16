import type { Receita } from '../../../shared/types/receita.types';
import './RecipeCard.css';

interface RecipeCardProps {
  receita: Receita;
}

export default function RecipeCard({ receita }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <h3 className="recipe-title">{receita.nome}</h3>
        <span className="recipe-author">por @{receita.usuario.apelido}</span>
      </div>

      {receita.publicacao && (
        <div className="recipe-stats">
          <div className="stat">
            <span className="stat-icon">⭐</span>
            <span className="stat-value">{receita.publicacao.notaMedia.toFixed(1)}</span>
            <span className="stat-label">({receita.publicacao.quantidadeVotos} votos)</span>
          </div>
          <div className="stat">
            <span className="stat-icon">😋</span>
            <span className="stat-value">{receita.publicacao.deliciosos}</span>
            <span className="stat-label">deliciosos</span>
          </div>
        </div>
      )}

      <div className="recipe-ingredients">
        <h4>Ingredientes:</h4>
        <ul>
          {receita.ingredientes.map((ing) => (
            <li key={ing.id}>
              {ing.nome} - {ing.quantidade}
            </li>
          ))}
        </ul>
      </div>

      <div className="recipe-instructions">
        <h4>Modo de preparo:</h4>
        <p>{receita.modoPreparo}</p>
      </div>

      {receita.usuario.instagram && (
        <div className="recipe-social">
          <span>📷 {receita.usuario.instagram}</span>
        </div>
      )}
    </div>
  );
}
