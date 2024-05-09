'use client'

import { Container } from '@/components'
import { ArrowUpCircle, ChevronRight, Newspaper } from '@/components/icons'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
	const [data, setData] = useState('')

	return (
		<Container>
			<div className='flex flex-col py-16'>
				<h1 className='text-primary dark:text-primary-dark font-normal text-2xl md:text-3xl md:leading-[48px]'>
					Hi, I&apos;m Rychillie.
				</h1>
				<p className='text-secondary dark:text-secondary-dark text-lg sm:text-xl md:text-2xl'>
					Welcome to my website, what would you like to do?
				</p>

				<div className='py-6 gap-3'>
					<Link
						href='/post'
						className='flex w-full flex-col items-start sm:flex-row p-3 gap-3 sm:items-center text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 rounded-lg bg-white dark:bg-black hover:opacity-65 transition-opacity'
					>
						<div className='pt-3 sm:p-1'>
							<Newspaper className='w-8 h-8' />
						</div>
						<div className='flex flex-col w-full'>
							<p>View my blog posts</p>
							<p className='text-secondary dark:text-secondary-dark'>View my blog posts published in recent years</p>
						</div>
						<ChevronRight className='w-6 h-6 hidden sm:flex' />
					</Link>
				</div>

				<p className='text-secondary dark:text-secondary-dark'>
					Ask me something, request or search, I am an Artificial Intelligence created for better interactivity with
					you!
				</p>
			</div>

			<div className='relative w-full'>
				<input
					type='text'
					value={data}
					onChange={e => setData(e.target.value)}
					placeholder='Ask me a question...'
					className='bg-transparent rounded-full text-secondary dark:text-secondary-dark border border-neutral-400 dark:border-neutral-600 py-2 pl-4 pr-2 placeholder:text-secondary dark:placeholder:text-secondary-dark w-full'
				/>
				<button className='hover:opacity-65 transition-opacity absolute top-0 right-0 p-2  text-secondary dark:text-secondary-dark z-10'>
					<ArrowUpCircle className='w-6 h-6' />
				</button>
			</div>
		</Container>
	)
}
