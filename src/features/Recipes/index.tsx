import { useEffect, useState, useMemo } from 'react';
import type { Receita } from '../../shared/types/receita.types';
import { receitasService } from '../../shared/services/receitas.service';
import RecipeCardSimple from './components/RecipeCardSimple';
import RecipeModal from './components/RecipeModal';
import SearchFilters from './components/SearchFilters';
import Loading from '../../shared/components/Loading';
import './Recipes.css';

export default function Recipes() {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedReceita, setSelectedReceita] = useState<Receita | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadReceitas() {
      try {
        setLoading(true);
        const data = await receitasService.getAll();
        setReceitas(data);
        setError(null);
      } catch (err) {
        setError('Erro ao carregar receitas. Verifique se o backend está rodando.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadReceitas();
  }, []);

  // Filtrar receitas baseado na busca
  const filteredReceitas = useMemo(() => {
    if (!searchTerm.trim()) {
      return receitas;
    }

    const term = searchTerm.toLowerCase();
    return receitas.filter((receita) => {
      // Buscar no nome da receita
      if (receita.nome.toLowerCase().includes(term)) {
        return true;
      }

      // Buscar no nome do autor
      if (receita.usuario.apelido.toLowerCase().includes(term) || 
          receita.usuario.nome.toLowerCase().includes(term)) {
        return true;
      }

      // Buscar nos ingredientes
      if (receita.ingredientes.some(ing => ing.nome.toLowerCase().includes(term))) {
        return true;
      }

      return false;
    });
  }, [receitas, searchTerm]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="recipes-page">
        <div className="error-message">
          <h2>⚠️ {error}</h2>
          <p>Certifique-se de que o backend está rodando em http://localhost:5000</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recipes-page">
      <header className="recipes-header">
        <h1>📖 Receitas</h1>
        <p className="recipes-subtitle">
          {filteredReceitas.length} {filteredReceitas.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
        </p>
      </header>

      <SearchFilters 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="recipes-grid">
        {filteredReceitas.length === 0 ? (
          <div className="no-recipes">
            {searchTerm ? (
              <>
                <p>Nenhuma receita encontrada para "{searchTerm}"</p>
                <button 
                  className="clear-filters-btn"
                  onClick={() => setSearchTerm('')}
                >
                  Limpar filtros
                </button>
              </>
            ) : (
              <p>Nenhuma receita cadastrada ainda.</p>
            )}
          </div>
        ) : (
          filteredReceitas.map((receita) => (
            <RecipeCardSimple
              key={receita.id}
              receita={receita}
              onClick={() => setSelectedReceita(receita)}
            />
          ))
        )}
      </div>

      {selectedReceita && (
        <RecipeModal
          receita={selectedReceita}
          onClose={() => setSelectedReceita(null)}
        />
      )}
    </div>
  );
}