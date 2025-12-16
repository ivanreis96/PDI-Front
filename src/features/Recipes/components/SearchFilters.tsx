import './SearchFilters.css';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchFilters({ searchTerm, onSearchChange }: SearchFiltersProps) {
  return (
    <div className="search-filters">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar por nome, ingrediente ou autor..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => onSearchChange('')}
            title="Limpar busca"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
