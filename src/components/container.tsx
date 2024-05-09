import type { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export default function Container({ children }: Props) {
	return <div className='max-w-3xl p-8 mx-auto w-full h-full flex justify-end flex-col'>{children}</div>
}
