// lib/redux/hooks.ts
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';

// ✅ Типизированный useDispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// ✅ Типизированный useSelector
export const useAppSelector = useSelector.withTypes<RootState>();

// ✅ Типизированный useStore
export const useAppStore = useStore.withTypes<AppStore>();