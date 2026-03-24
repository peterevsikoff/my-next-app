// components/Counter.tsx
'use client';

import { decrement, increment, incrementAsync } from '@/lib/redux/action-creators';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';


export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const loading = useAppSelector((state) => state.counter.loading);
  const dispatch = useAppDispatch();
  
  return (
    <div className="p-4 border rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Счетчик: {count}</h2>
      
      {loading && <p className="text-blue-500">Загрузка...</p>}
      
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>
        
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +1
        </button>
        
        <button
          onClick={() => dispatch(incrementAsync())}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          +1 через 1 сек (Saga)
        </button>
      </div>
    </div>
  );
}