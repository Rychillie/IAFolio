'use client';

import { ArrowUpCircle } from '@/components/icons';
import { useState } from 'react';

export default function InputAI() {
  const [data, setData] = useState('');

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Ask me a question..."
        className="w-full rounded-full border border-neutral-400 bg-transparent py-2 pl-4 pr-2 text-secondary placeholder:text-secondary dark:border-neutral-600 dark:text-secondary-dark dark:placeholder:text-secondary-dark"
      />
      <button className="absolute right-0 top-0 z-10 p-2 text-secondary  transition-opacity hover:opacity-65 dark:text-secondary-dark">
        <ArrowUpCircle className="size-6" />
      </button>
    </div>
  );
}
