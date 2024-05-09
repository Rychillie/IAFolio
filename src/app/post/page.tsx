import { Container, CustomLink } from '@/components'
import e from '@/dbschema/edgeql-js'
import { createClient } from 'edgedb'

const client = createClient()

export default async function Post() {
	const selectPosts = e.select(e.BlogPost, () => ({
		id: true,
		title: true,
		content: true,
	}))
	const posts = await selectPosts.run(client)

	return (
		<Container>
			<h1 className='text-3xl font-bold mb-4'>Posts</h1>
			{posts.length === 0 ? (
				<p>No posts found.</p>
			) : (
				<ul>
					{posts.map(post => (
						<li key={post.id} className='mb-4'>
							<CustomLink href={`/post/${post.id}`}>{post.title}</CustomLink>
						</li>
					))}
				</ul>
			)}
		</Container>
	)
}
