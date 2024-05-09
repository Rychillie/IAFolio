import { Container, CustomLink } from '@/components'
import e from '@/dbschema/edgeql-js'
import { createClient } from 'edgedb'

const client = createClient()

export default async function Post({ params }: { params: { id: string } }) {
	const post = await e
		.select(e.BlogPost, post => ({
			id: true,
			title: true,
			content: true,
			filter_single: e.op(post.id, '=', e.uuid(params.id)),
		}))
		.run(client)

	if (!post) {
		return <div>Post not found</div>
	}

	return (
		<Container>
			<nav>
				<CustomLink href='/' replace>
					Back to list
				</CustomLink>
			</nav>
			<h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
			<p>{post.content}</p>
		</Container>
	)
}
