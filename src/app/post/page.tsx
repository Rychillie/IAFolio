import { getPosts } from '@/actions/post';
import { Container, CustomLink, Heading, Text } from '@/components';

export default async function Post() {
  const posts = await getPosts();

  return (
    <Container>
      <Heading className="mb-4">Posts</Heading>
      {posts.length === 0 ? (
        <Text>No posts found.</Text>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <CustomLink href={`/post/${post.id}`}>{post.title}</CustomLink>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
