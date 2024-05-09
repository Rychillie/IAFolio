'use client';

import { Container } from '@/components';
import { ArrowUpCircle, ChevronRight, Newspaper } from '@/components/icons';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState('');

  return (
    <Container>
      <div className="flex flex-col py-16">
        <h1 className="text-2xl font-normal text-primary dark:text-primary-dark md:text-3xl md:leading-[48px]">
          Hi, I&apos;m Rychillie.
        </h1>
        <p className="text-lg text-secondary dark:text-secondary-dark sm:text-xl md:text-2xl">
          Welcome to my website, what would you like to do?
        </p>

        <div className="gap-3 py-6">
          <Link
            href="/post"
            className="flex w-full flex-col items-start gap-3 rounded-lg border border-purple-200 bg-white p-3 text-purple-600 transition-opacity hover:opacity-65 dark:border-purple-800 dark:bg-black dark:text-purple-400 sm:flex-row sm:items-center"
          >
            <div className="pt-3 sm:p-1">
              <Newspaper className="size-8" />
            </div>
            <div className="flex w-full flex-col">
              <p>View my blog posts</p>
              <p className="text-secondary dark:text-secondary-dark">
                View my blog posts published in recent years
              </p>
            </div>
            <ChevronRight className="hidden size-6 sm:flex" />
          </Link>
        </div>

        <p className="text-secondary dark:text-secondary-dark">
          Ask me something, request or search, I am an Artificial Intelligence created for better
          interactivity with you!
        </p>
      </div>

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
    </Container>
  );
}
