// lib/hooks/useBirdeyeTokens.ts
import { createSignal, createResource } from 'solid-js';
import { birdeyeService } from '../../services/birdeye';
import { TokenData } from '../interfaces';

export function useBirdeyeTokens() {
  const [tokens, setTokens] = createSignal<TokenData[]>([]);
  const [isLoading, setIsLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const fetchTokens = async (limit: number = 50) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const tokenData = await birdeyeService.fetchTopTokensByLiquidity(limit);
      setTokens(tokenData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
      console.error('Failed to fetch tokens:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    tokens,
    isLoading,
    error,
    fetchTokens,
    refetch: () => fetchTokens()
  };
}