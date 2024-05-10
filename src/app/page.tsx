import { Card, Container, Heading, InputAI, Text } from '@/components';

export default function Home() {
  return (
    <Container>
      <div className="flex h-full flex-col justify-end py-16">
        <Heading>Hi, I&apos;m Rychillie.</Heading>
        <Text colour="secondary">Welcome to my website, what would you like to do?</Text>

        <div className="gap-3 py-6">
          <Card
            title="View my blog posts"
            description="View my blog posts published in recent years"
            icon="Newspaper"
            href="/post"
            color="purple"
          />
        </div>

        <Text colour="secondary">
          Ask me something, request or search, I am an Artificial Intelligence created for better
          interactivity with you!
        </Text>
      </div>

      <InputAI />
    </Container>
  );
}
