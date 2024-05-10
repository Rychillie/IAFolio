import e from '@/dbschema/edgeql-js';
import { client } from '@/lib';

export async function getPost(id: string) {
  return await e
    .select(e.BlogPost, (post) => ({
      id: true,
      title: true,
      content: true,
      filter_single: e.op(post.id, '=', e.uuid(id))
    }))
    .run(client);
}

export async function getPosts() {
  return await e
    .select(e.BlogPost, () => ({
      id: true,
      title: true,
      content: true
    }))
    .run(client);
}
