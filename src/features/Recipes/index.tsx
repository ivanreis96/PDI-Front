import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';
import type { Receita } from '../../shared/types/receita.types';
import { receitasService } from '../../shared/services/receitas.service';
import RecipeCardSimple from './components/RecipeCardSimple';
import RecipeModal from './components/RecipeModal';
import SearchFilters from './components/SearchFilters';
import Loading from '../../shared/components/Loading';

const RecipesPage = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 32px 24px;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;

const RecipesHeader = styled.header`
  text-align: center;
  margin-bottom: 48px;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0 0 12px 0;
    font-weight: 800;
  }

  @media (max-width: 768px) {
    margin-bottom: 32px;

    h1 {
      font-size: 36px;
    }
  }
`;

const RecipesSubtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.textPrimary};

  h2 {
    color: #e74c3c;
    margin: 0 0 16px 0;
    font-size: 24px;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    font-size: 16px;
  }
`;

const NoRecipes = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px 20px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 18px;

  p {
    margin: 0 0 20px 0;
  }
`;

const ClearFiltersButton = styled.button`
  background: ${({ theme }) => theme.colors.accentPrimary};
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.accentSecondary};
    transform: translateY(-2px);
  }
`;

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
      <RecipesPage>
        <ErrorMessage>
          <h2>⚠️ {error}</h2>
          <p>Certifique-se de que o backend está rodando em http://localhost:5000</p>
        </ErrorMessage>
      </RecipesPage>
    );
  }

  return (
    <RecipesPage>
      <RecipesHeader>
        <h1>📖 Receitas</h1>
        <RecipesSubtitle>
          {filteredReceitas.length} {filteredReceitas.length === 1 ? 'receita encontrada' : 'receitas encontradas'}
        </RecipesSubtitle>
      </RecipesHeader>

      <SearchFilters 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <RecipesGrid>
        {filteredReceitas.length === 0 ? (
          <NoRecipes>
            {searchTerm ? (
              <>
                <p>Nenhuma receita encontrada para "{searchTerm}"</p>
                <ClearFiltersButton onClick={() => setSearchTerm('')}>
                  Limpar filtros
                </ClearFiltersButton>
              </>
            ) : (
              <p>Nenhuma receita cadastrada ainda.</p>
            )}
          </NoRecipes>
        ) : (
          filteredReceitas.map((receita) => (
            <RecipeCardSimple
              key={receita.id}
              receita={receita}
              onClick={() => setSelectedReceita(receita)}
            />
          ))
        )}
      </RecipesGrid>

      {selectedReceita && (
        <RecipeModal
          receita={selectedReceita}
          onClose={() => setSelectedReceita(null)}
        />
      )}
    </RecipesPage>
  );
}