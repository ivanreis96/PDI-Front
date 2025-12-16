import type { Receita } from '../../../shared/types/receita.types';
import './RecipeCardSimple.css';

interface RecipeCardSimpleProps {
  receita: Receita;
  onClick: () => void;
}

export default function RecipeCardSimple({ receita, onClick }: RecipeCardSimpleProps) {
  return (
    <div className="recipe-card-simple" onClick={onClick}>
      <div className="recipe-card-image">
        <div className="recipe-placeholder-image">
          <span className="recipe-icon">🍽️</span>
        </div>
      </div>

      <div className="recipe-card-content">
        <h3 className="recipe-card-title">{receita.nome}</h3>
        <p className="recipe-card-author">por @{receita.usuario.apelido}</p>

        {receita.publicacao && (
          <div className="recipe-card-stats">
            <span className="stat-item">
              <span className="stat-icon">⭐</span>
              {receita.publicacao.notaMedia.toFixed(1)}
            </span>
            <span className="stat-item">
              <span className="stat-icon">🗳️</span>
              {receita.publicacao.quantidadeVotos}
            </span>
            <span className="stat-item">
              <span className="stat-icon">😋</span>
              {receita.publicacao.deliciosos}
            </span>
          </div>
        )}

        <div className="recipe-card-tags">
          <span className="tag">{receita.ingredientes.length} ingredientes</span>
        </div>
      </div>
    </div>
  );
}
