'use client';

import { useState } from 'react';
import { Provider } from 'react-redux';
import { makeStore, RootState } from '@/lib/redux/store';

export default function StoreProvider({ children, initialState }: {
    children: React.ReactNode;
    initialState?: Partial<RootState>;
    }) {

    // Используем ленивую инициализацию через useState
    const [store] = useState(() => makeStore(initialState));
    return <Provider store={store}>{children}</Provider>;
}