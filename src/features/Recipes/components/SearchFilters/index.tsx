import {
  FiltersContainer,
  SearchBox,
  SearchIcon,
  SearchInput,
  ClearButton,
} from './styles';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchFilters({ searchTerm, onSearchChange }: SearchFiltersProps) {
  return (
    <FiltersContainer>
      <SearchBox>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Buscar por nome, ingrediente ou autor..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <ClearButton
            onClick={() => onSearchChange('')}
            title="Limpar busca"
          >
            ✕
          </ClearButton>
        )}
      </SearchBox>
    </FiltersContainer>
  );
}
