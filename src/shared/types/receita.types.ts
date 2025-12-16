// Tipos baseados na API do backend
export interface Usuario {
  id: number;
  nome: string;
  apelido: string;
  instagram?: string;
  tiktok?: string;
}

export interface Publicacao {
  dataPublicacao: string;
  notaMedia: number;
  quantidadeVotos: number;
  deliciosos: number;
}

export interface Ingrediente {
  id: number;
  nome: string;
  quantidade: string;
}

export interface Receita {
  id: number;
  nome: string;
  modoPreparo: string;
  usuario: Usuario;
  publicacao: Publicacao | null;
  ingredientes: Ingrediente[];
}
