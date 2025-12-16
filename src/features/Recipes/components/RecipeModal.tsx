import type { Receita } from '../../../shared/types/receita.types';
import './RecipeModal.css';

interface RecipeModalProps {
  receita: Receita;
  onClose: () => void;
}

export default function RecipeModal({ receita, onClose }: RecipeModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-header">
          <div className="modal-image">
            <div className="modal-placeholder-image">
              <span className="modal-icon">🍽️</span>
            </div>
          </div>
          
          <div className="modal-title-section">
            <h2 className="modal-title">{receita.nome}</h2>
            <p className="modal-author">
              por <strong>@{receita.usuario.apelido}</strong>
            </p>
            
            {receita.usuario.instagram && (
              <p className="modal-social">📷 {receita.usuario.instagram}</p>
            )}
            {receita.usuario.tiktok && (
              <p className="modal-social">🎵 {receita.usuario.tiktok}</p>
            )}
          </div>
        </div>

        {receita.publicacao && (
          <div className="modal-stats">
            <div className="modal-stat">
              <span className="modal-stat-icon">⭐</span>
              <div>
                <div className="modal-stat-value">{receita.publicacao.notaMedia.toFixed(1)}</div>
                <div className="modal-stat-label">{receita.publicacao.quantidadeVotos} votos</div>
              </div>
            </div>
            <div className="modal-stat">
              <span className="modal-stat-icon">😋</span>
              <div>
                <div className="modal-stat-value">{receita.publicacao.deliciosos}</div>
                <div className="modal-stat-label">deliciosos</div>
              </div>
            </div>
            <div className="modal-stat">
              <span className="modal-stat-icon">📅</span>
              <div>
                <div className="modal-stat-value">
                  {new Date(receita.publicacao.dataPublicacao).toLocaleDateString('pt-BR')}
                </div>
                <div className="modal-stat-label">publicado</div>
              </div>
            </div>
          </div>
        )}

        <div className="modal-body">
          <section className="modal-section">
            <h3 className="modal-section-title">📝 Ingredientes</h3>
            <ul className="modal-ingredients-list">
              {receita.ingredientes.map((ing) => (
                <li key={ing.id}>
                  <span className="ingredient-name">{ing.nome}</span>
                  <span className="ingredient-quantity">{ing.quantidade}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="modal-section">
            <h3 className="modal-section-title">👨‍🍳 Modo de Preparo</h3>
            <div className="modal-instructions">
              {receita.modoPreparo}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
