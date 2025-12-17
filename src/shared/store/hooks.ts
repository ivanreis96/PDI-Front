import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Hooks tipados para usar no lugar de useDispatch e useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
