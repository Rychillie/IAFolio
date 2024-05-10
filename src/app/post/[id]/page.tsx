import { getPost } from '@/actions/post';
import { Container, CustomLink, Heading, Text } from '@/components';

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container>
      <nav className="mb-4">
        <CustomLink href="/" replace>
          Back to list
        </CustomLink>
      </nav>
      <Heading className="mb-4">{post.title}</Heading>
      <Text>{post.content}</Text>
    </Container>
  );
}
