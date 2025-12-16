import type { Receita } from '../types/receita.types';

const API_BASE_URL = 'http://localhost:5000/api';

export const receitasService = {
  // Buscar todas as receitas
  async getAll(): Promise<Receita[]> {
    const response = await fetch(`${API_BASE_URL}/receitas`);
    if (!response.ok) {
      throw new Error('Erro ao buscar receitas');
    }
    return response.json();
  },

  // Buscar receita por ID
  async getById(id: number): Promise<Receita> {
    const response = await fetch(`${API_BASE_URL}/receitas/${id}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar receita');
    }
    return response.json();
  },

  // Buscar top receitas
  async getTop(limit: number = 10): Promise<Receita[]> {
    const response = await fetch(`${API_BASE_URL}/receitas/top?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar top receitas');
    }
    return response.json();
  }
};
