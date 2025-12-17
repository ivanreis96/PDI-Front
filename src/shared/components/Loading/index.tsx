import { LoadingContainer, Spinner, LoadingText } from './styles';

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Carregando receitas...</LoadingText>
    </LoadingContainer>
  );
}
